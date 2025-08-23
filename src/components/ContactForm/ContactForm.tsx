"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setOk(res.ok);
    setLoading(false);
  }

  return (
    <section id="contact" className="section-padding">
      {/* mismo wrapper que el card interior */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <h3 className="font-heading text-5xl md:text-6xl">
            Let’s collaborate & design<span className="text-accent">.</span>
          </h3>
        </div>

        {/* form centrado y angosto como el demo */}
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-2"
        >
          <input
            name="name"
            placeholder="Full Name*"
            required
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            className="col-span-full w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <div className="col-span-full text-center">
            <button
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                →
              </span>
            </button>
            {ok === true && (
              <p className="mt-3 text-green-400">Message sent ✅</p>
            )}
            {ok === false && (
              <p className="mt-3 text-red-400">Error sending message ❌</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
