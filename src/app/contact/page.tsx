"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Minimal window typing for grecaptcha
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const getRecaptchaToken = async () => {
    if (!siteKey) throw new Error("reCAPTCHA site key not configured");
    if (typeof window === "undefined" || !window.grecaptcha) throw new Error("reCAPTCHA not loaded");

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha!.ready(() => {
        window.grecaptcha!
          .execute(siteKey, { action: "contact" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    setStatus("submitting");
    try {
      const token = await getRecaptchaToken();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send your message. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      {siteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          strategy="afterInteractive"
        />
      )}
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!siteKey && (
                <p className="text-sm text-destructive mb-4">
                  reCAPTCHA is not configured. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
                </p>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}
                {status === "success" && (
                  <p className="text-sm text-green-600">Message sent! I&apos;ll get back to you soon.</p>
                )}

                <Button type="submit" className="w-full" disabled={status === "submitting" || !siteKey}>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
