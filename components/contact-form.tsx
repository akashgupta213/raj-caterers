"use client";

import type React from "react";
import { useState } from "react";
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

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <Card
  className="
    bg-white/[0.03]
    backdrop-blur-[var(--blur)]
    border border-white/10
    hover:bg-white/[0.06]
    transition
    rounded-2xl
    shadow-lg shadow-black/20
  "
  style={{ "--blur": "7px" } as React.CSSProperties}
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

              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input name="name" placeholder="Your name" required  className="
    bg-white/[0.05] border-white/20 text-white
    placeholder:text-white/80
    placeholder:font-semibold
    placeholder:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"/>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input name="email" type="email" placeholder="your@email.com" required  className="
    bg-white/[0.05] border-white/20 text-white
    placeholder:text-white/80
    placeholder:font-semibold
    placeholder:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
  " />
                </div>

              </div>

              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input name="phone" placeholder="Your phone number" required   className="
    bg-white/[0.05] border-white/20 text-white
    placeholder:text-white/80
    placeholder:font-semibold
    placeholder:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
  "/>
              </div>

              <div className="space-y-2" >
                <Label >Message</Label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your event..."
                  required
                 className="
    bg-white/[0.05] border-white/20 text-white
    placeholder:text-white/80
    placeholder:font-semibold
    placeholder:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
  " />
              </div>

              <Button
  type="submit"
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
  );
}