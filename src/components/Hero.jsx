import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import JarvisDemo from "./JarvisDemo";
import FloatingElements from "./FloatingElements";
import Particle from "./Particle";
import DemoVideoModal from "./DemoVideoModal";

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

        // Change subject every 5 seconds
        if (elapsedRef.current >= 5000) {
          elapsedRef.current = 0;

          setWordIndex((current) => (current + 1) % SCRAMBLE_WORDS.length);

          animationFrame = requestAnimationFrame(animate);
          return;
        }

        const target = SCRAMBLE_WORDS[wordIndex];

        // Scramble during the first second
        const scrambleDuration = 1000;

        if (elapsedRef.current < scrambleDuration) {
          const progress = elapsedRef.current / scrambleDuration;

          // Always reveal the first letter
          const revealCount = Math.max(1, Math.floor(progress * target.length));

          const scrambled = target
            .split("")
            .map((char, index) => {
              // First letter always remains the real initial
              if (index === 0) {
                return char;
              }

              // Reveal characters progressively
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
      className="inline-grid align-baseline text-brand cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible width anchor */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        Chemistry
      </span>

      <span className="col-start-1 row-start-1 text-left">{display}</span>
    </span>
  );
};

const Hero = ({ onStartLearning }) => {
  const heroRef = useRef(null);
  const { content } = useLanguage();
  const [isDemoVideoOpen, setIsDemoVideoOpen] = useState(false);

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        ref={heroRef}
        className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8"
      >
        {/* =====================================================
            BACKGROUND EFFECTS
        ====================================================== */}

        <Particle />

        <FloatingElements containerRef={heroRef} />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* =================================================
                HEADLINE
            ================================================== */}

            <h1
              className="
    text-center
    text-3xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
    text-slate-900
    tracking-tight
    leading-[1.15]
    sm:leading-[1.1]
    mb-5
    sm:mb-6
  "
            >
              <span className="block text-center">
                {content.hero.heading[0]} <ScrambleWord />
              </span>

              <span className="block text-center">
                {content.hero.heading[1]}{" "}
                <span className="text-brand">{content.hero.heading[2]}</span>
              </span>
            </h1>
            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                text-base
                sm:text-lg
                md:text-xl
                text-slate-600
                mb-8
                sm:mb-10
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              {content.hero.description}
            </p>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-3
                sm:gap-4
              "
            >
              {/* Primary CTA */}

              <button
                type="button"
                onClick={onStartLearning}
                className="
                  w-full
                  max-w-xs
                  sm:w-auto
                  sm:max-w-none
                  bg-[#de7437]
                  text-white
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  rounded-full
                  font-semibold
                  text-base
                  sm:text-lg
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-brand-hover
                  hover:scale-105
                  duration-300
                  transition-all
                  shadow-lg
                  hover:shadow-brand/25
                "
              >
                <span className="min-w-0 text-center leading-snug">
                  {content.hero.ctaPrimary}
                </span>

                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>

              {/* Secondary CTA */}

              <button
                type="button"
                onClick={() => setIsDemoVideoOpen(true)}
                className="
                  w-full
                  max-w-xs
                  sm:w-auto
                  sm:max-w-none
                  bg-white
                  text-slate-700
                  border
                  border-slate-200
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  rounded-full
                  font-semibold
                  text-base
                  sm:text-lg
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:text-white
                  hover:bg-slate-600
                  hover:scale-105
                  duration-300
                  transition-all
                "
              >
                <span className="min-w-0 text-center leading-snug">
                  {content.hero.ctaSecondary}
                </span>

                <Play className="w-5 h-5 shrink-0 fill-slate-700" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          JARVIS DEMO SECTION
          
          IMPORTANT:
          This is intentionally OUTSIDE the Hero section.
      ========================================================== */}

      {/* The negative margin tucks the demo up under the hero. It has to scale
          with the hero's own padding — a flat -150px eats past the CTA buttons
          once the hero shrinks to its mobile spacing. */}
      <section
        id="demo"
        className="
          relative
          -mt-16
          bg-white
          overflow-hidden
          px-4
          py-4
          sm:-mt-37.5
          sm:px-6
          sm:py-24
          lg:px-8
        "
      >
        <JarvisDemo />
      </section>

      {/* =========================================================
          DEMO VIDEO MODAL

          Rendered outside the hero section on purpose: the section
          clips overflow and the content sits inside an animated
          (transformed) wrapper, either of which would break a
          fixed-position overlay.
      ========================================================== */}

      <DemoVideoModal
        isOpen={isDemoVideoOpen}
        onClose={() => setIsDemoVideoOpen(false)}
      />
    </>
  );
};

export default Hero;
