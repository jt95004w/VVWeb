"use client";

import { FormEvent, useState } from "react";

export default function Contacts() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please retry.");
      }

      setIsSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="tap-in" className="section-shell">
      <div className="mb-6 flex items-center gap-2">
        <span className="badge-pill">Tap in</span>
      </div>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s build the next thing together.</h2>
          <p className="text-white/80">
            Tell us what you are working on, the roles you need, or simply drop links to your work. We will respond with a plan within
            48 hours.
          </p>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-white/75">
            <p className="font-semibold text-gradient">Prefer a quick call?</p>
            <p className="text-white/70">Send your availability and we will schedule a 15-minute discovery session.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-start justify-center gap-3 text-lg text-white/80">
                <p className="text-gradient text-2xl font-semibold">Submission received.</p>
                <p>We&apos;ll review your note and get back to you shortly with next steps.</p>
                <button
                  className="mt-2 w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/40"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another idea
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white">Tell us about yourself</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    placeholder="Share links, goals, and what you need help with."
                  />
                  <p className="text-xs text-white/60">Dropbox and Drive links are welcome.</p>
                </div>
                {error && <p className="text-sm text-red-300">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-amber-300 px-6 py-3 text-sm font-semibold text-purple-950 shadow-lg shadow-purple-500/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Sending..." : "Apply"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
