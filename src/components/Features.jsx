import React from "react";
import { BookOpen, Mic, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const WORDS = ["Physics", "Chemistry", "Math"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function ScrambleWord() {
  const [display, setDisplay] = useState(WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const target = WORDS[wordIndex];
    let frame = 0;
    const totalFrames = 15;

    const scrambleInterval = setInterval(() => {
      frame++;

      const revealCount = Math.floor((frame / totalFrames) * target.length);

      const scrambled = target
        .split("")
        .map((ch, i) =>
          i < revealCount
            ? ch
            : CHARS[Math.floor(Math.random() * CHARS.length)],
        )
        .join("");

      setDisplay(scrambled);

      if (frame >= totalFrames) {
        clearInterval(scrambleInterval);
        setDisplay(target);
      }
    }, 40);

    return () => clearInterval(scrambleInterval);
  }, [wordIndex]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 3000);

    return () => clearInterval(wordTimer);
  }, []);

  return (
    <span className="inline-grid align-baseline text-[#8B7AD9]">
      {/* Invisible element reserves the width of the longest word */}
      <span className="invisible col-start-1 row-start-1">Chemistry</span>

      {/* Animated word sits on top */}
      <span className="col-start-1 row-start-1 text-left">{display}</span>
    </span>
  );
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:scale-[1.03] hover:-translate-y-1 duration-300 shadow-sm hover:shadow-xl transition-all hover:bg-brand hover:border-brand/20">
    <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
      <Icon className="w-6 h-6 text-brand transition-colors group-hover:text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors group-hover:text-white">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed transition-colors group-hover:text-white/90">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Board Solutions",
      description:
        "Access 20+ years of HSC Physics Board questions from all boards, solved step-by-step with clear explanations.",
    },
    {
      icon: Zap,
      title: "Interactive AI Tutor",
      description:
        "Ask JARVIS anything. Our AI tutor understands the context of every question and provides personalized help.",
    },
    {
      icon: Mic,
      title: "Voice-First Learning",
      description:
        "Listen to JARVIS's explanations in high-quality English and Bengali voices. Study without looking at the screen.",
    },
    {
      icon: Target,
      title: "MCQ Mastery",
      description:
        "Practice with timed MCQ sessions. Get instant feedback and analysis on your weak areas to improve your score.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-surface px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need to ace <ScrambleWord />
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Stop searching through messy test papers. E TESTPaper brings all
            your study materials into one intelligent workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
