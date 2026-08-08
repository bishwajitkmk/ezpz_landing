import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  Volume2,
  User,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const demoSlides = {
  Physics: {
    tutor: "JARVIS",
    badge: "AI Physics Tutor",
    chapter: "Thermodynamics",
    question:
      "Explain the Carnot Engine cycle and why it is considered the most efficient engine.",
    intro:
      "The Carnot cycle is a theoretical ideal cycle consisting of four reversible processes.",
    steps: [
      "Isothermal Expansion",
      "Adiabatic Expansion",
      "Isothermal Compression",
      "Adiabatic Compression",
    ],
    formula: "η = 1 − T₂ / T₁",
    conclusion:
      "It is considered the most efficient because it represents the maximum possible efficiency between two temperature reservoirs.",
  },

  Chemistry: {
    tutor: "AURUM",
    badge: "AI Chemistry Coach",
    chapter: "Chemical Kinetics",
    question:
      "Why does increasing temperature make a chemical reaction happen faster?",
    intro:
      "When temperature increases, particles gain more kinetic energy and move faster.",
    steps: [
      "More frequent collisions",
      "Higher collision energy",
      "More particles exceed Eₐ",
      "Greater reaction rate",
    ],
    formula: "k = A e⁻ᴱᵃ⸱ᴿᵀ",
    conclusion:
      "So, increasing temperature increases the fraction of successful collisions and usually causes the reaction rate to rise significantly.",
  },

  Math: {
    tutor: "ALGEBRO",
    badge: "AI Math Mentor",
    chapter: "Algebra",
    question:
      "Show me how to solve the quadratic equation x² + x − 6 = 0 step by step.",
    intro:
      "We can solve this quadratic equation by factoring it into two simpler expressions.",
    steps: [
      "Identify a, b, and c",
      "Find two suitable factors",
      "Rewrite the quadratic",
      "Solve for x",
    ],
    formula: "x² + x − 6 = (x + 3)(x − 2)",
    conclusion:
      "Therefore, the two solutions are x = 2 and x = −3. Both values satisfy the original equation.",
  },
};

const subjects = ["Physics", "Chemistry", "Math"];

/* How long each subject stays on screen, and how often the progress bar ticks. */
const SLIDE_DURATION = 10000;
const TICK = 50;
const PROGRESS_STEP = (TICK / SLIDE_DURATION) * 100;

const JarvisDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeSubject = subjects[activeIndex];
  const currentDemo = demoSlides[activeSubject];

  /* Mirrors `progress` so the ticker can read it without restarting itself. */
  const progressRef = useRef(0);

  /* Fill the progress bar, then roll over to the next subject. Runs forever. */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = progressRef.current + PROGRESS_STEP;

      if (next >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % subjects.length);
        return;
      }

      progressRef.current = next;
      setProgress(next);
    }, TICK);

    return () => clearInterval(timer);
  }, []);

  const selectSubject = (index) => {
    progressRef.current = 0;
    setProgress(0);
    setActiveIndex(index);
  };

  return (
    /* Rendered inside Hero's padded container, so it adds no horizontal padding
       of its own. `text-left` undoes the centring Hero applies to the chat. */
    <section
      id="demo"
      className="py-12 sm:py-20 md:py-24 overflow-hidden text-left"
    >
      <div className="max-w-7xl mx-auto">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Meet EZPZ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            One tutor. Every subject.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            See how JARVIS, AURUM and ALGEBRO explain concepts differently
            across Physics, Chemistry and Math.
          </p>
        </div>

        {/* =====================================================
            SUBJECT SELECTOR + DEMO WINDOW

            Stacked on mobile, side by side from lg upwards.
        ====================================================== */}

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
          {/* =====================================================
              SUBJECT SELECTOR
          ====================================================== */}

          <div
            role="tablist"
            aria-label="Demo subject"
            className="w-full self-center lg:self-auto flex justify-center gap-1.5 sm:gap-3 rounded-full border border-slate-200 bg-white/90 p-1.5 sm:p-2 shadow-sm backdrop-blur lg:sticky lg:top-24 lg:w-48 lg:shrink-0 lg:flex-col lg:rounded-3xl lg:p-3"
          >
            {subjects.map((subject, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={subject}
                  type="button"
                  role="tab"
                  id={`demo-tab-${subject}`}
                  aria-selected={isActive}
                  aria-controls="demo-panel"
                  onClick={() => selectSubject(index)}
                  /* Equal-width pills on phones so three subjects fit one row
                     at 320px without wrapping the selector to two lines. */
                  className={`relative min-w-0 flex-1 overflow-hidden whitespace-nowrap rounded-full border-2 px-2 py-3 text-xs sm:px-5 sm:text-sm font-semibold transition-all duration-300 lg:w-full lg:flex-none lg:rounded-2xl lg:text-left ${
                    isActive
                      ? "border-brand bg-brand text-white shadow-md"
                      : "border-transparent bg-white text-slate-700 hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {/* Dropped on the narrowest phones so "Chemistry" still fits
                      on one line inside a third of a 320px screen. */}
                  <span className="mr-2 hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-current" />
                  {subject}

                  {/* Countdown to the next subject */}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-1 bg-white/70 transition-[width] duration-100 ease-linear"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              DEMO WINDOW
          ====================================================== */}

          <div className="relative flex-1 min-w-0">
            {/* Background Glow */}

            <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full scale-75 -z-10" />

            <div
              id="demo-panel"
              role="tabpanel"
              aria-labelledby={`demo-tab-${activeSubject}`}
              className="bg-slate-50 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-xl"
            >
              {/* =================================================
                  DEMO TOP BAR
              ================================================== */}

              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    {currentDemo.tutor} Demo
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {activeSubject} · {currentDemo.chapter}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  AI Tutor Online
                </div>
              </div>

              {/* =================================================
                  ANIMATED CONTENT
              ================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubject}
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.995,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.995,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* =================================================
                      USER QUESTION
                  ================================================== */}

                  <div className="flex gap-2 sm:gap-4 justify-end mb-6">
                    <div className="bg-brand text-white p-3.5 sm:p-4 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                      <p className="text-sm md:text-base leading-relaxed">
                        {currentDemo.question}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>

                  {/* =================================================
                      JARVIS RESPONSE
                  ================================================== */}

                  <div className="flex gap-2 sm:gap-4">
                    {/* JARVIS ICON */}

                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>

                    <div className="bg-white border border-slate-100 p-4 sm:p-6 rounded-2xl rounded-tl-none flex-1 min-w-0 shadow-sm">
                      {/* RESPONSE HEADER */}

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="font-bold text-slate-900">
                          {currentDemo.tutor}
                        </span>

                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded uppercase font-bold tracking-wider">
                          {currentDemo.badge}
                        </span>
                      </div>

                      {/* =================================================
                          INTRO
                      ================================================== */}

                      <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                        {currentDemo.intro}
                      </p>

                      {/* =================================================
                          STEPS
                      ================================================== */}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {currentDemo.steps.map((step, index) => (
                          <div
                            key={step}
                            className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2.5"
                          >
                            <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[9px] font-bold shrink-0">
                              {index + 1}
                            </span>

                            <span className="text-xs sm:text-sm text-slate-600 font-medium">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* =================================================
                          FORMULA
                      ================================================== */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.1,
                          duration: 0.3,
                        }}
                        /* Formulae are the one thing that cannot wrap, so on a
                           narrow phone the box scrolls instead of overflowing. */
                        className="bg-brand/5 border border-brand/10 rounded-xl py-4 px-3 text-center mb-4 overflow-x-auto"
                      >
                        <span className="font-serif italic whitespace-nowrap text-lg sm:text-2xl text-brand">
                          {currentDemo.formula}
                        </span>
                      </motion.div>

                      {/* =================================================
                          CONCLUSION
                      ================================================== */}

                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {currentDemo.conclusion}
                      </p>

                      {/* =================================================
                          RESPONSE ACTIONS
                      ================================================== */}

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          className="flex min-h-9 items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-hover transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                          Listen
                        </button>

                        <button
                          type="button"
                          className="flex min-h-9 items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Ask Follow-up
                        </button>

                        <div className="ml-auto hidden sm:flex items-center gap-1.5 text-[10px] text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Board verified
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  DEMO FOOTER
              ================================================== */}

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-center text-sm text-slate-500">
                <div className="flex items-center gap-2 text-center">
                  <BookOpen className="w-4 h-4 text-brand shrink-0" />

                  <span>
                    Cycling through Physics, Chemistry and Math — or pick a
                    subject from the list.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JarvisDemo;
