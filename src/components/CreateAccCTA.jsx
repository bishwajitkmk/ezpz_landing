import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Sparkles,
  Target,
} from "lucide-react";

const SCRAMBLE_WORDS = ["Physics", "Chemistry", "Math"];
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

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

        if (elapsedRef.current >= 5000) {
          elapsedRef.current = 0;

          setWordIndex((current) => (current + 1) % SCRAMBLE_WORDS.length);

          animationFrame = requestAnimationFrame(animate);
          return;
        }

        const target = SCRAMBLE_WORDS[wordIndex];
        const scrambleDuration = 1000;

        if (elapsedRef.current < scrambleDuration) {
          const progress = elapsedRef.current / scrambleDuration;

          const revealCount = Math.max(1, Math.floor(progress * target.length));

          const scrambled = target
            .split("")
            .map((char, index) => {
              if (index === 0) return char;

              if (index < revealCount) return char;

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
    setIsPaused(true);
    setDisplay(SCRAMBLE_WORDS[wordIndex]);
  };

  const handleMouseLeave = () => {
    lastTimeRef.current = null;
    setIsPaused(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        inline-grid
        cursor-default
        align-baseline
        text-brand
      "
    >
      {/* Keeps the width stable */}
      <span
        aria-hidden="true"
        className="
          invisible
          col-start-1
          row-start-1
          whitespace-nowrap
        "
      >
        Chemistry
      </span>

      <span
        className="
          col-start-1
          row-start-1
          whitespace-nowrap
        "
      >
        {display}
      </span>
    </span>
  );
};

const CreateAccCTA = ({ onClick }) => {
  return (
    <section
      className="
        relative
        isolate
        mt-20
        overflow-hidden
        border-y
        border-slate-200/70
        bg-slate-50
        px-4
        py-24
        sm:mt-28
        sm:px-6
        sm:py-32
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-slate-50" />

        {/* Main central glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-brand/[0.07]
            blur-[120px]
          "
        />

        {/* Upper glow */}
        <div
          className="
            absolute
            left-[15%]
            top-[-15%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-sky-400/[0.06]
            blur-[100px]
          "
        />

        {/* Lower glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-indigo-400/[0.05]
            blur-[110px]
          "
        />

        {/* Technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.45]
            [background-image:linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_78%)]
          "
        />

        {/* Fine horizontal light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-px
            w-[90vw]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-brand/10
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          FLOATING SYSTEM CARDS
      ====================================================== */}

      {/* Left card */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[4%]
          top-[22%]
          hidden
          xl:block
          2xl:left-[9%]
        "
      >
        <div
          className="
            w-52
            rotate-[-7deg]
            rounded-2xl
            border
            border-white/80
            bg-white/65
            p-4
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-brand/10
                text-brand
              "
            >
              <Brain className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-800">AI Tutor</p>

              <p className="mt-0.5 text-[10px] text-slate-400">Ready to help</p>
            </div>

            <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-brand/50" />
          </div>
        </div>
      </div>

      {/* Right card */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[30%]
          hidden
          xl:block
          2xl:right-[9%]
        "
      >
        <div
          className="
            w-52
            rotate-[6deg]
            rounded-2xl
            border
            border-white/80
            bg-white/65
            p-4
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
              "
            >
              <Target className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-800">Study progress</p>

              <p className="mt-0.5 text-[10px] text-slate-400">Keep going</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[84%] rounded-full bg-emerald-400" />
            </div>

            <span className="text-[10px] font-bold text-slate-500">84%</span>
          </div>
        </div>
      </div>

      {/* Small floating chip */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[20%]
          left-[12%]
          hidden
          lg:block
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/80
            bg-white/70
            px-4
            py-2
            shadow-lg
            shadow-slate-900/[0.04]
            backdrop-blur-xl
          "
        >
          <Clock3 className="h-3.5 w-3.5 text-brand" />

          <span className="text-[10px] font-semibold text-slate-500">
            Focus session · 42 min
          </span>
        </div>
      </div>

      {/* Small floating chip */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          right-[13%]
          hidden
          lg:block
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/80
            bg-white/70
            px-4
            py-2
            shadow-lg
            shadow-slate-900/[0.04]
            backdrop-blur-xl
          "
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

          <span className="text-[10px] font-semibold text-slate-500">
            Concept mastered
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}

        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-brand/10
            bg-white/70
            px-4
            py-2
            shadow-sm
            backdrop-blur-md
          "
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-brand
              sm:text-xs
            "
          >
            Start learning smarter
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            mx-auto
            max-w-4xl
            text-4xl
            font-bold
            leading-[1.08]
            tracking-[-0.035em]
            text-slate-900
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="block">Ready to master</span>

          <span className="mt-2 block">
            <ScrambleWord />
            <span className="text-slate-900">?</span>
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-relaxed
            text-slate-600
            sm:mt-8
            sm:text-lg
            md:text-xl
          "
        >
          Learn concepts, solve problems and prepare for your exams with an AI
          tutor built around the way you learn.
        </p>

        {/* CTA */}

        <div className="mt-10 sm:mt-12">
          <button
            type="button"
            onClick={onClick}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2.5
              rounded-full
              bg-brand
              px-8
              py-4
              text-base
              font-semibold
              text-white
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-brand-hover
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
              active:translate-y-0
              sm:px-9
              sm:py-4.5
              sm:text-lg
            "
          >
            Get Started
            <ArrowUpRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>

        {/* Reassurance */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-xs
            font-medium
            text-slate-400
            sm:text-sm
          "
        >
          <BookOpen className="h-3.5 w-3.5" />

          <span>No complicated setup · Start learning in seconds</span>
        </div>
      </div>
    </section>
  );
};

export default CreateAccCTA;
