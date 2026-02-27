"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔑 Replace with your Web3Forms key
    formData.append("access_key", "YOUR_REAL_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Error:", data);
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form">
      <Card
        className="bg-white/[0.03] backdrop-blur-[var(--blur)] border border-white/10 hover:bg-white/[0.06] transition rounded-2xl shadow-lg shadow-black/20"
        style={{ ["--blur" as any]: "7px" }}
      >
        {isSubmitted ? (
          <CardContent className="pt-6">
            <div className="text-center py-12 space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-purple-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold">Message Sent!</h3>

              <p className="text-white/60">
                Thank you for reaching out. We’ll contact you soon.
              </p>

              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="hover:bg-purple-500/10"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        ) : (
          <>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-white/[0.05] border-white/20 text-white placeholder:text-white/80 placeholder:font-semibold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-white/[0.05] border-white/20 text-white placeholder:text-white/80 placeholder:font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    name="phone"
                    placeholder="Your phone number"
                    required
                    className="bg-white/[0.05] border-white/20 text-white placeholder:text-white/80 placeholder:font-semibold"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your event..."
                    required
                    className="bg-white/[0.05] border-white/20 text-white placeholder:text-white/80 placeholder:font-semibold"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 transition"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}