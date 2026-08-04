import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Volume2,
  User,
} from "lucide-react";

const demoSlides = [
  {
    subject: "Physics",
    badge: "AI Physics Tutor",
    prompt:
      "Explain the Carnot Engine cycle and why it is considered the most efficient engine.",
    steps: [
      "The Carnot cycle is a theoretical ideal cycle that consists of four reversible processes:",
      "1. Isothermal Expansion (T₁)\n2. Adiabatic Expansion\n3. Isothermal Compression (T₂)\n4. Adiabatic Compression",
      "Efficiency (η) is given by:",
      "η = 1 - (T₂ / T₁)",
      "It's the most efficient because it minimizes entropy generation. Would you like me to explain the T-S diagram for this?",
    ],
  },
  {
    subject: "Chemistry",
    badge: "AI Chemistry Coach",
    prompt:
      "Help me understand why increasing temperature speeds up a chemical reaction.",
    steps: [
      "Higher temperature gives particles more kinetic energy, so they collide more often and with more force.",
      "1. More successful collisions\n2. Greater activation energy reach\n3. Faster reaction rate",
      "The reaction rate can be visualized using the energy profile diagram:",
      "Eₐ",
      "That is why many reactions accelerate noticeably when the mixture is warmed.",
    ],
  },
  {
    subject: "Math",
    badge: "AI Math Mentor",
    prompt: "Show me how to solve this quadratic equation step by step.",
    steps: [
      "We can solve it by factoring or by using the quadratic formula.",
      "1. Rearrange the equation\n2. Identify a, b, and c\n3. Substitute into the formula",
      "x = (-b ± √(b² - 4ac)) / 2a",
      "x = 2 or x = -3",
      "Would you like me to explain why both values satisfy the original equation?",
    ],
  },
];

/* --------------------------------
   SLIDE ANIMATION
--------------------------------- */

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },

  exit: (direction) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
};

const JarvisDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [direction, setDirection] = useState(1);

  /* --------------------------------
     NAVIGATION
  --------------------------------- */

  const goToDemo = (index, forcedDirection = null) => {
    if (index === activeDemo) return;

    setDirection(forcedDirection ?? (index > activeDemo ? 1 : -1));

    setActiveDemo(index);
  };

  const changeDemo = (step) => {
    const nextIndex =
      (activeDemo + step + demoSlides.length) % demoSlides.length;

    goToDemo(nextIndex, step > 0 ? 1 : -1);
  };

  /* --------------------------------
     SWIPE
  --------------------------------- */

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) {
      changeDemo(1);
    } else if (info.offset.x > 60) {
      changeDemo(-1);
    }
  };

  const currentDemo = demoSlides[activeDemo];

  return (
    <section id="demo" className="py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --------------------------------
            MAIN LAYOUT
        --------------------------------- */}

        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-10 xl:gap-16">
          {/* =================================
              LEFT SIDE
          ================================= */}

          <div className="lg:w-1/2">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Meet JARVIS</span>
            </div>

            {/* Heading */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Study smarter with your personal AI tutor for Physics, Chemistry,
              and Math
            </h2>

            {/* Description */}

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you are learning formulas, lab concepts, or
              problem-solving steps, JARVIS explains each idea clearly and
              adapts to your pace.
            </p>

            {/* Features */}

            <div className="space-y-6">
              {[
                {
                  title: "Personalized Explanations",
                  desc: "JARVIS adapts its tone and depth to your current understanding.",
                },
                {
                  title: "Bilingual Support",
                  desc: "Switch between English and Bengali mid-conversation.",
                },
                {
                  title: "Visual Logic",
                  desc: "Uses clear step-by-step reasoning for every subject.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>

                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================
              RIGHT SIDE — DEMO
          ================================= */}

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-xl relative">
              {/* --------------------------------
                  DEMO HEADER
              --------------------------------- */}

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    Swipe to explore
                  </p>

                  <p className="text-sm text-slate-500">
                    Physics • Chemistry • Math
                  </p>
                </div>

                {/* Navigation Buttons */}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changeDemo(-1)}
                    className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:text-brand hover:border-brand/30"
                    aria-label="Previous demo"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeDemo(1)}
                    className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:text-brand hover:border-brand/30"
                    aria-label="Next demo"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* --------------------------------
                  ANIMATED DEMO
              --------------------------------- */}

              <div className="relative">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={currentDemo.subject}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                      scale: {
                        duration: 0.25,
                      },
                      filter: {
                        duration: 0.2,
                      },
                    }}
                    drag="x"
                    dragConstraints={{
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    className="space-y-6"
                  >
                    {/* =================================
                        USER MESSAGE
                    ================================= */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.08,
                        ease: "easeOut",
                      }}
                      className="flex gap-4 justify-end"
                    >
                      <div className="bg-brand text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                        <p className="text-sm md:text-base">
                          {currentDemo.prompt}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-slate-500" />
                      </div>
                    </motion.div>

                    {/* =================================
                        JARVIS RESPONSE
                    ================================= */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.18,
                        ease: "easeOut",
                      }}
                      className="flex gap-4"
                    >
                      {/* JARVIS ICON */}

                      <motion.div
                        initial={{
                          scale: 0.8,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0"
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                      </motion.div>

                      {/* JARVIS CARD */}

                      <div className="bg-white border border-slate-100 p-5 rounded-2xl rounded-tl-none max-w-[95%] sm:max-w-[90%] shadow-sm">
                        {/* JARVIS HEADER */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.28,
                            duration: 0.25,
                          }}
                          className="flex items-center gap-2 mb-3"
                        >
                          <span className="font-bold text-slate-900">
                            JARVIS
                          </span>

                          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded uppercase font-bold tracking-wider">
                            {currentDemo.badge}
                          </span>
                        </motion.div>

                        {/* RESPONSE CONTENT */}

                        <div className="space-y-3 text-slate-700 text-sm md:text-base">
                          {currentDemo.steps.map((step, index) => (
                            <motion.div
                              key={`${currentDemo.subject}-${index}`}
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + index * 0.08,
                                ease: "easeOut",
                              }}
                              className={
                                index === 2 || index === 3
                                  ? "bg-brand/5 p-4 rounded-xl text-center"
                                  : index === 1
                                    ? "bg-slate-50 p-3 rounded-lg border border-slate-100 font-mono text-[13px]"
                                    : ""
                              }
                            >
                              {index === 3 ? (
                                <span className="text-brand font-serif italic text-xl">
                                  {step}
                                </span>
                              ) : (
                                <p className="whitespace-pre-line">{step}</p>
                              )}
                            </motion.div>
                          ))}

                          {/* --------------------------------
                              ACTION BUTTONS
                          --------------------------------- */}

                          <motion.div
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                            transition={{
                              delay: 0.75,
                              duration: 0.3,
                            }}
                            className="flex items-center gap-3 pt-2"
                          >
                            <button className="flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-hover transition-colors">
                              <Volume2 className="w-4 h-4" />
                              Listen (English)
                            </button>

                            <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              Ask Follow-up
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* --------------------------------
                  SLIDE INDICATORS
              --------------------------------- */}

              <div className="mt-6 flex items-center justify-center gap-2">
                {demoSlides.map((demo, index) => (
                  <button
                    key={demo.subject}
                    type="button"
                    onClick={() => goToDemo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeDemo
                        ? "w-8 bg-brand"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Show ${demo.subject} demo`}
                  />
                ))}
              </div>

              {/* --------------------------------
                  STUDENT SOCIAL PROOF
              --------------------------------- */}

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                          alt="User"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-xs">
                    <p className="font-bold text-slate-900">
                      Join 500+ students
                    </p>

                    <p className="text-slate-500 text-[10px]">
                      Studying with JARVIS today
                    </p>
                  </div>
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
