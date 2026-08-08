import React, { useEffect, useRef, useState } from "react";

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

        // Change word every 5 seconds
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
              // Always keep the first character correct
              if (index === 0) {
                return char;
              }

              // Gradually reveal the actual word
              if (index < revealCount) {
                return char;
              }

              // Random character
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

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused, wordIndex]);

  const handleMouseEnter = () => {
    setIsPaused(true);

    // Immediately show the actual subject
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
        inline-flex
        w-[9ch]
        justify-center
        whitespace-nowrap
        align-baseline
        text-brand
        cursor-default
      "
    >
      {display}
    </span>
  );
};

const CreateAccCTA = ({ onClick }) => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-slate-200
        bg-slate-50
        px-4
        py-20
        sm:px-6
        sm:py-32
        lg:px-8
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand/10
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-3/4
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-brand/30
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          text-center
        "
      >
        {/* Eyebrow */}

        <p
          className="
            mb-5
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-brand
            sm:text-sm
          "
        >
          Start learning smarter
        </p>

        {/* Heading */}

        <h2
          className="
            mx-auto
            max-w-4xl
            text-3xl
            font-bold
            leading-[1.15]
            tracking-tight
            text-slate-900
            sm:text-5xl
            sm:leading-[1.1]
            md:text-6xl
            lg:text-7xl
          "
        >
          {/* The two halves are separate lines so the scrambling word never
              reflows the sentence as its letters change. */}
          <span className="block">Ready to master</span>
          <ScrambleWord />
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
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-brand
              px-8
              py-4
              text-base
              font-semibold
              text-white
              shadow-xl
              shadow-brand/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-brand-hover
              hover:shadow-2xl
              hover:shadow-brand/30
              active:translate-y-0
              sm:px-10
              sm:py-4.5
              sm:text-lg
            "
          >
            Get Started
          </button>
        </div>

        {/* Small reassurance */}

        <p
          className="
            mt-5
            text-xs
            font-medium
            text-slate-400
            sm:text-sm
          "
        >
          No complicated setup · Start learning in seconds
        </p>
      </div>
    </section>
  );
};

export default CreateAccCTA;
