"use client";

import * as React from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactFormSection() {
  const [values, setValues] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-accent/15 bg-white/70 px-4 py-3 text-sm text-accent placeholder:text-accent/40 outline-none transition-colors duration-200 focus:border-accent/40";
  const labelClass =
    "text-[11px] font-medium tracking-[0.14em] text-muted uppercase";

  return (
    <section className="bg-surface py-24 max-[767px]:py-16">
      <div className="mx-auto max-w-[940px] px-5">
        <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-[0.15em] text-muted uppercase">
              Contact
            </span>
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.1] font-normal text-accent">
            Let&apos;s start a conversation
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-accent/70">
            Tell us a little about what you&apos;re working toward and we&apos;ll
            get back to you with a clear next step.
          </p>
        </div>

        {submitted ? (
          <div className="mx-auto mt-12 max-w-[560px] rounded-2xl border border-accent/15 bg-white/70 p-8 text-center">
            <h3 className="font-display text-2xl font-normal text-accent">
              Thank you — message received
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-accent/70">
              We appreciate you reaching out. Someone from our team will be in
              touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-[560px] flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-5 max-[479px]:grid-cols-1">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell us more…"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center self-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-accent transition-colors duration-300 hover:bg-brand-hover"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
