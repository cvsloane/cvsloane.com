import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
}

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "chris@heavisidegroup.com";
const SES_FROM_ADDRESS = process.env.SES_FROM_ADDRESS;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_THRESHOLD = 0.5;

const sesClient =
  process.env.AWS_REGION && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
    ? new SESv2Client({ region: process.env.AWS_REGION })
    : null;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const token = body.token;

    if (!name || !email || !message || !token) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!RECAPTCHA_SECRET) {
      return NextResponse.json({ error: "reCAPTCHA server key not configured." }, { status: 500 });
    }

    // Verify reCAPTCHA token with Google
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    });

    const recaptchaJson = await recaptchaRes.json();
    const recaptchaScore: number | undefined = recaptchaJson.score;
    const recaptchaSuccess: boolean = recaptchaJson.success;

    if (!recaptchaSuccess || (typeof recaptchaScore === "number" && recaptchaScore < RECAPTCHA_THRESHOLD)) {
      return NextResponse.json({ error: "Failed reCAPTCHA validation." }, { status: 400 });
    }

    // Basic email sanity check
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!sesClient || !SES_FROM_ADDRESS) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const subject = `New contact form submission from ${name}`;
    const textBody = `Name: ${name}
Email: ${email}

Message:
${message}
`;

    await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: SES_FROM_ADDRESS,
        Destination: { ToAddresses: [CONTACT_TO_EMAIL] },
        Content: {
          Simple: {
            Subject: { Data: subject },
            Body: {
              Text: { Data: textBody },
            },
          },
        },
      }),
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit message." }, { status: 500 });
  }
}
