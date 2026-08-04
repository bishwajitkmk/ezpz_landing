import React, { useEffect, useRef, useState } from "react";
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
import { useLanguage } from "../i18n/LanguageContext";
import JarvisDemo from "./JarvisDemo";


const SCRAMBLE_WORDS = ["Physics", "Chemistry", "Math"];

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const SUBJECT_BY_INITIAL = {
  P: "Physics",
  C: "Chemistry",
  M: "Math",
};

const ScrambleWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState(SCRAMBLE_WORDS[0]);
  const [isPaused, setIsPaused] = useState(false);

  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        elapsedRef.current += delta;

        // Change subject every 3.2 seconds
        if (elapsedRef.current >= 3200) {
          elapsedRef.current = 0;

          setWordIndex((current) => (current + 1) % SCRAMBLE_WORDS.length);

          animationFrame = requestAnimationFrame(animate);
          return;
        }

        const target = SCRAMBLE_WORDS[wordIndex];

        // Scramble happens during the first ~800ms
        const scrambleDuration = 800;

        if (elapsedRef.current < scrambleDuration) {
          const progress = elapsedRef.current / scrambleDuration;

          // Always reveal the first letter
          const revealCount = Math.max(1, Math.floor(progress * target.length));

          const scrambled = target
            .split("")
            .map((char, index) => {
              // First letter is ALWAYS the real subject initial
              if (index === 0) {
                return char;
              }

              // Revealed characters
              if (index < revealCount) {
                return char;
              }

              // Random characters
              return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
              ];
            })
            .join("");

          setDisplay(scrambled);
        } else {
          setDisplay(target);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, wordIndex]);

  const handleMouseEnter = () => {
    const initial = display.charAt(0).toUpperCase();

    // P → Physics
    // C → Chemistry
    // M → Math
    const matchedWord = SUBJECT_BY_INITIAL[initial];

    if (matchedWord) {
      setDisplay(matchedWord);
    }

    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    lastTimeRef.current = null;
    setIsPaused(false);
  };

  return (
    <span
      className="inline-block text-brand cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {display}
    </span>
  );
};

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
  const { content, language } = useLanguage();

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
            {content.hero.heading[0]} <ScrambleWord />
            <br className="hidden md:block" />
            {content.hero.heading[1]}{" "}
            <span className="text-brand">{content.hero.heading[2]}</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>

          {/* CTA */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#de7437] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-brand-hover hover:scale-105 duration-300 transition-all shadow-lg hover:shadow-brand/25"
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:text-white hover:bg-slate-600 hover:scale-105 duration-300 transition-all"
            >
              {content.hero.ctaSecondary}
              <Play className="w-5 h-5 fill-slate-700" />
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            PRODUCT PREVIEW
        ====================================================== */}

        <JarvisDemo/>
      </div>
    </section>
  );
};

export default Hero;
