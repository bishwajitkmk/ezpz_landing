import { useState } from "react";
import {
  GraduationCap,
  School,
  Building2,
  Languages,
  ArrowRight,
  Atom,
  Sigma,
  FlaskConical,
} from "lucide-react";

export default function GetStarted() {
  const [role, setRole] = useState("Student");
  const [language, setLanguage] = useState("Both");

  const [subjects, setSubjects] = useState(["Physics", "Chemistry", "Math"]);

  const toggleSubject = (subject) => {
    if (subjects.includes(subject)) {
      setSubjects(subjects.filter((s) => s !== subject));
    } else {
      setSubjects([...subjects, subject]);
    }
  };

  return (
    <main className="min-h-dvh bg-linear-to-b from-white via-slate-50 to-white">
      {/* pt clears the fixed 4rem navbar on top of the section's own spacing. */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-4 py-2 text-sm font-semibold">
            Welcome
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Get Started
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Personalize your learning experience before entering the platform.
          </p>
        </div>

        {/* ROLE */}

        <div className="mt-12 sm:mt-16">
          <h2 className="font-semibold text-slate-800 mb-5">
            Choose your role
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {[
              {
                title: "Student",
                icon: GraduationCap,
              },
              {
                title: "Teacher",
                icon: School,
              },
              {
                title: "Institution",
                icon: Building2,
              },
            ].map((item) => {
              const Icon = item.icon;

              const active = role === item.title;

              return (
                <button
                  key={item.title}
                  onClick={() => setRole(item.title)}
                  className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 text-left
                  ${
                    active
                      ? "border-brand bg-brand text-white shadow-xl"
                      : "bg-white hover:border-brand hover:shadow-lg"
                  }`}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 mb-4 sm:mb-5" />

                  <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm sm:text-base opacity-80">
                    Continue as a {item.title.toLowerCase()}.
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* SUBJECTS */}

        <div className="mt-12 sm:mt-16">
          <h2 className="font-semibold text-slate-800 mb-5">
            Choose your subjects
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              {
                name: "Physics",
                icon: Atom,
              },
              {
                name: "Chemistry",
                icon: FlaskConical,
              },
              {
                name: "Math",
                icon: Sigma,
              },
            ].map((subject) => {
              const Icon = subject.icon;

              const active = subjects.includes(subject.name);

              return (
                <button
                  key={subject.name}
                  onClick={() => toggleSubject(subject.name)}
                  className={`flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm transition-all sm:gap-3 sm:px-6 sm:text-base
                  ${
                    active
                      ? "bg-brand text-white border-brand"
                      : "bg-white hover:border-brand"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />

                  {subject.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* LANGUAGE */}

        <div className="mt-12 sm:mt-16">
          <h2 className="font-semibold text-slate-800 mb-5">
            Preferred Language
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["English", "বাংলা", "Both"].map((item) => (
              <button
                key={item}
                onClick={() => setLanguage(item)}
                className={`min-h-11 rounded-full border px-5 text-sm transition-all sm:px-6 sm:text-base
                ${
                  language === item
                    ? "bg-brand text-white border-brand"
                    : "bg-white hover:border-brand"
                }`}
              >
                <Languages className="inline w-4 h-4 mr-2" />

                {item}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-16 text-center sm:mt-20">
          <button className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#de7437] px-8 py-4 text-base font-semibold text-white transition hover:scale-105 sm:w-auto sm:max-w-none sm:px-10 sm:py-5 sm:text-lg">
            Launch ETESTPaper
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>

          <p className="mt-5 text-sm text-slate-500 sm:text-base">
            Already have an account?
            <a
              href="/login"
              className="ml-2 font-semibold text-brand hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
