import { useState } from "react";
import { ArrowLeft, Lock, Mail, UserCircle2 } from "lucide-react";

export default function Login({ onBack, onNavigateCreateAccount }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-dvh bg-slate-50">
      {/* pt clears the fixed 4rem navbar on top of the section's own spacing. */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        {/* Wraps rather than squeezing — the two items do not fit one row on a
            360px phone. */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 sm:mb-12">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Back to home
          </button>

          <div className="rounded-full bg-white px-4 py-2 shadow-sm text-sm text-slate-500">
            New here?
            <button
              type="button"
              onClick={onNavigateCreateAccount}
              className="ml-2 font-semibold text-brand hover:underline"
            >
              Create account
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:rounded-4xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-4 py-2 text-sm font-semibold">
                <Lock className="w-4 h-4" />
                Secure sign in
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Welcome back
              </h1>
              <p className="mt-4 text-slate-600 max-w-2xl text-base sm:text-lg">
                Log in to continue your HSC exam prep and access the AI study
                tools.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-brand/20 bg-brand/5 p-6 text-brand sm:p-8">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Login submitted
                </h2>
                <p className="mt-3 text-slate-700">
                  We&apos;ve received your login request. If this were a real
                  app, you would now be redirected into the platform.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <div className="mt-2 relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </div>
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <div className="mt-2 relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      placeholder="Enter your password"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-hover sm:w-auto"
                >
                  Sign in
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 rounded-3xl bg-brand text-white p-6 shadow-xl sm:rounded-4xl sm:p-8 lg:p-10">
            {/* The wide tracking makes this string wider than a 320px card, so
                it is allowed to wrap. */}
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/80 sm:text-sm sm:tracking-[0.2em]">
              <UserCircle2 className="h-5 w-5 shrink-0" />
              <span className="min-w-0">Sign in benefits</span>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <h3 className="font-semibold">Save your progress</h3>
                <p className="mt-1 text-sm text-white/80">
                  Pick up where you left off with custom AI study paths.
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <h3 className="font-semibold">Secure access</h3>
                <p className="mt-1 text-sm text-white/80">
                  Your email and password stay private and protected.
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <h3 className="font-semibold">Student-first experience</h3>
                <p className="mt-1 text-sm text-white/80">
                  Access your questions, answers, and practice history
                  instantly.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
