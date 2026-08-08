import { useState } from "react";
import { ArrowLeft, ShieldCheck, Sparkles, UserPlus } from "lucide-react";

export default function CreateAccount({ onBack, onNavigateLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [role, setRole] = useState("Student");
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
            Already have an account?
            <button
              type="button"
              onClick={onNavigateLogin}
              className="ml-2 font-semibold text-brand hover:underline"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:rounded-4xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Start learning with E TESTPaper
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Create your free account
              </h1>
              <p className="mt-4 text-slate-600 max-w-2xl text-base sm:text-lg">
                Tell us a little about yourself and start using the smart study
                tools built for HSC exam prep.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-brand/20 bg-brand/5 p-6 text-brand sm:p-8">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  You&apos;re all set!
                </h2>
                <p className="mt-3 text-slate-700">
                  We&apos;ve received your details. Check your inbox for the
                  next steps to complete account setup.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Full name
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="mt-2 w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Email address
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="mt-2 w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      placeholder="Create a password"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="mt-2 w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Confirm password
                    <input
                      name="confirmPassword"
                      type="password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="Repeat your password"
                      /* text-base on phones stops iOS Safari zooming the page
                         in when the field takes focus. */
                      className="mt-2 w-full min-h-12 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-sm"
                    />
                  </label>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Your role
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      { name: "Student" },
                      { name: "Teacher" },
                      { name: "Institution" },
                    ].map((option) => {
                      const isActive = role === option.name;
                      return (
                        <button
                          key={option.name}
                          type="button"
                          onClick={() => setRole(option.name)}
                          className={`min-h-11 rounded-full border px-4 text-sm font-medium transition ${
                            isActive
                              ? "border-brand bg-brand text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-brand"
                          }`}
                        >
                          {option.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-hover sm:w-auto"
                >
                  Create account
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 rounded-3xl bg-brand text-white p-6 shadow-xl sm:rounded-4xl sm:p-8 lg:p-10">
            {/* The wide tracking makes this string wider than a 320px card, so
                it is allowed to wrap. */}
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/80 sm:text-sm sm:tracking-[0.2em]">
              <UserPlus className="h-5 w-5 shrink-0" />
              <span className="min-w-0">Why choose E TESTPaper</span>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="font-semibold">Safe account setup</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Secure sign-up flow with email-based access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="font-semibold">Personalized onboarding</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Pick your role and subject preferences right away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="font-semibold">Quick start</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Get into the platform in seconds with simple setup steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
