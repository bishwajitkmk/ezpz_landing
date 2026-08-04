import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Volume2,
  Languages,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const heroSteps = [
  {
    type: "text",
    content:
      "The Carnot cycle is a theoretical ideal cycle consisting of four reversible processes.",
  },
  {
    type: "list",
    content: [
      "Isothermal Expansion",
      "Adiabatic Expansion",
      "Isothermal Compression",
      "Adiabatic Compression",
    ],
  },
  {
    type: "formula",
    content: "η = 1 − T₂ / T₁",
  },
  {
    type: "text",
    content:
      "It is considered the most efficient because it represents the maximum possible efficiency between two temperature reservoirs.",
  },
];

const Hero = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    let mounted = true;

    const runAnimation = async () => {
      while (mounted) {
        setVisibleSteps(0);

        for (let i = 1; i <= heroSteps.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 750));

          if (!mounted) return;

          setVisibleSteps(i);
        }

        await new Promise((resolve) => setTimeout(resolve, 4500));
      }
    };

    runAnimation();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* =====================================================
            HERO COPY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Master HSC Physics with <br className="hidden md:block" />
            Your Personal <span className="text-brand">AI Tutor</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Get step-by-step board solutions, interactive AI explanations, and
            voice-guided learning for HSC Physics in English & Bengali.
          </p>

          {/* CTA */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#de7437] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-brand-hover hover:scale-105 duration-300 transition-all shadow-lg hover:shadow-brand/25"
            >
              Start Studying for Free
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 hover:scale-105 duration-300 transition-all"
            >
              Watch JARVIS in Action
              <Play className="w-5 h-5 fill-slate-700" />
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            PRODUCT PREVIEW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-16 relative"
        >
          {/* Background Glow */}

          <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full -z-10 scale-[0.8]" />

          {/* =================================================
              BROWSER WINDOW
          ================================================== */}

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-w-5xl mx-auto text-left">
            {/* Browser Header */}

            <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-5 py-3 flex items-center gap-3">
              {/* Browser dots */}

              <div className="flex gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-200" />
              </div>

              {/* Address */}

              <div className="flex-1 max-w-md mx-auto h-7 bg-white rounded-md border border-slate-200 flex items-center justify-center px-3 text-[9px] sm:text-[10px] text-slate-400">
                ezpz.app/tutor/jarvis
              </div>

              <div className="w-[42px] hidden sm:block" />
            </div>

            {/* =================================================
                PRODUCT CONTENT
            ================================================== */}

            <div className="p-3 sm:p-6 md:p-8 bg-white">
              <div className="flex gap-4 sm:gap-6 md:gap-8">
                {/* =================================================
                    LEFT SIDEBAR
                ================================================== */}

                <aside className="hidden md:block w-[25%] shrink-0">
                  {/* Logo */}

                  <div className="flex items-center gap-2 mb-7">
                    <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>

                    <span className="font-bold text-slate-900">EzPz</span>
                  </div>

                  {/* Subject */}

                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-3">
                      Subject
                    </p>

                    <div className="flex items-center gap-3 bg-sky-50 border border-sky-100 rounded-xl px-3 py-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          Physics
                        </p>

                        <p className="text-[10px] text-slate-500">1st Paper</p>
                      </div>
                    </div>
                  </div>

                  {/* Chapters */}

                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-3">
                      Learning path
                    </p>

                    <div className="px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-600">
                      Vectors
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-600">
                      Dynamics
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-brand/5 text-xs text-brand font-semibold">
                      Thermodynamics
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-600">
                      Optics
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-slate-500">
                        Chapter progress
                      </span>

                      <span className="text-[10px] font-bold text-brand">
                        72%
                      </span>
                    </div>

                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-brand rounded-full" />
                    </div>
                  </div>
                </aside>

                {/* =================================================
                    MAIN TUTOR AREA
                ================================================== */}

                <main className="flex-1 min-w-0">
                  {/* Tutor Header */}

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>

                        {/* Online indicator */}

                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            JARVIS
                          </h3>

                          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[9px] font-bold uppercase tracking-wider">
                            AI Physics Tutor
                          </span>
                        </div>

                        <p className="text-[10px] sm:text-xs text-slate-400">
                          Your personal Physics tutor
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Online
                    </div>
                  </div>

                  {/* Board Context */}

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center gap-2 mb-4"
                  >
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md text-[9px] sm:text-[10px] font-semibold text-slate-500">
                      HSC 2024
                    </span>

                    <span className="px-2.5 py-1 bg-slate-100 rounded-md text-[9px] sm:text-[10px] font-semibold text-slate-500">
                      Dhaka Board
                    </span>

                    <span className="px-2.5 py-1 bg-sky-50 rounded-md text-[9px] sm:text-[10px] font-semibold text-sky-600">
                      CQ · Question 3
                    </span>
                  </motion.div>

                  {/* =================================================
                      USER QUESTION
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.4,
                    }}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 mb-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Your question
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                      Explain the Carnot Engine cycle and why it is considered
                      the most efficient engine.
                    </p>
                  </motion.div>

                  {/* =================================================
                      JARVIS RESPONSE
                  ================================================== */}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.65,
                      duration: 0.4,
                    }}
                    className="border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm"
                  >
                    {/* Response header */}

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>

                      <span className="text-xs font-bold text-slate-900">
                        JARVIS
                      </span>

                      <span className="text-[9px] text-slate-400">
                        is explaining...
                      </span>
                    </div>

                    {/* Animated response */}

                    <div className="space-y-3">
                      <AnimatePresence>
                        {visibleSteps >= 1 && (
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                          >
                            {heroSteps[0].content}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Process list */}

                      <AnimatePresence>
                        {visibleSteps >= 2 && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="grid grid-cols-2 gap-2"
                          >
                            {heroSteps[1].content.map((item, index) => (
                              <div
                                key={item}
                                className="flex items-center gap-2 bg-slate-50 rounded-lg px-2.5 sm:px-3 py-2"
                              >
                                <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center text-[9px] font-bold shrink-0">
                                  {index + 1}
                                </span>

                                <span className="text-[9px] sm:text-[11px] text-slate-600 font-medium">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Formula */}

                      <AnimatePresence>
                        {visibleSteps >= 3 && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.97,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.4,
                            }}
                            className="bg-sky-50 border border-sky-100 rounded-xl py-3 sm:py-4 text-center"
                          >
                            <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-sky-600">
                              {heroSteps[2].content}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Final explanation */}

                      <AnimatePresence>
                        {visibleSteps >= 4 && (
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                          >
                            {heroSteps[3].content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* =================================================
                        RESPONSE ACTIONS
                    ================================================== */}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100"
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        Listen
                      </button>

                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <Languages className="w-3.5 h-3.5" />
                        বাংলা
                      </button>

                      <div className="ml-auto flex items-center gap-1.5 text-[9px] text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Board verified
                      </div>
                    </motion.div>
                  </motion.div>
                </main>
              </div>
            </div>

            {/* =================================================
                MOBILE SUBJECT BAR
            ================================================== */}

            <div className="md:hidden border-t border-slate-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-white" />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-900">
                    Physics · 1st Paper
                  </p>

                  <p className="text-[9px] text-slate-400">Thermodynamics</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[9px] text-slate-400">Progress</p>

                <p className="text-[10px] font-bold text-brand">72%</p>
              </div>
            </div>
          </div>

          {/* =================================================
              FLOATING TRUST CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              x: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
            className="absolute -bottom-5 -right-3 sm:-right-6 bg-white border border-slate-100 rounded-2xl shadow-xl px-4 py-3 hidden lg:flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">
                Board-verified content
              </p>

              <p className="text-[10px] text-slate-400">
                Built for HSC preparation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
