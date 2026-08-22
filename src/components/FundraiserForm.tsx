"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

export default function FundraiserForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const { error } = await supabase.from("fundraiser_leads").insert({
      org_name: String(data.get("org_name") ?? ""),
      contact_name: String(data.get("contact_name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? "") || null,
      event_date: String(data.get("event_date") ?? "") || null,
      message: String(data.get("message") ?? "") || null,
    });

    if (error) {
      setStatus("error");
      setErrorMessage("Something went wrong submitting your request. Please call us instead.");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-teal/10 p-8 text-center">
        <p className="font-display text-xl text-teal-dark">Thanks &mdash; request received!</p>
        <p className="mt-2 text-sm text-foreground/70">
          We&rsquo;ll be in touch soon. If it&rsquo;s urgent, call us at (805) 643-8425.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="org_name" className="block text-sm font-semibold text-ink">
            Organization name
          </label>
          <input
            id="org_name"
            name="org_name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div>
          <label htmlFor="contact_name" className="block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="contact_name"
            name="contact_name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="event_date" className="block text-sm font-semibold text-ink">
            Preferred date
          </label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Tell us about your organization and event
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink transition hover:bg-teal-dark hover:text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
