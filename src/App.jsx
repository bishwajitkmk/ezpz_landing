import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import { useLanguage } from "./i18n/LanguageContext";

const App = () => {
  const [showBlog, setShowBlog] = useState(false);
  /* `language` is the flag on the context — `content.language` is undefined,
     so the CTA below used to stay English even in Bengali mode. */
  const { language } = useLanguage();

  const handleNavigateHome = (sectionId = null) => {
    setShowBlog(false);

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const navbarOffset = 88;
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="min-h-dvh bg-white font-sans text-slate-900 selection:bg-brand/10 selection:text-brand">
      <Navbar
        onNavigateToBlog={() => setShowBlog(true)}
        onNavigateHome={handleNavigateHome}
      />
      {showBlog ? (
        <BlogPage onBack={() => setShowBlog(false)} />
      ) : (
        <>
          <main id="home">
            <Hero />
            <Features />
            
            <Pricing />

            {/* Final CTA Section */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2" />
              </div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
                  {language === "bn"
                    ? "পদার্থবিদ্যায় মাস্টার হতে প্রস্তুত?"
                    : "Ready to master Physics?"}
                </h2>
                <p className="text-brand-light/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
                  {language === "bn"
                    ? "ই-টেস্টপেপার ব্যবহার করে হাজারো শিক্ষার্থী ইতিমধ্যে তাদের বোর্ড পরীক্ষায় সাফল্য পেয়ে যাচ্ছে।"
                    : "Join thousands of students who are already using E TESTPaper to ace their board exams."}
                </p>
                <button className="w-full max-w-xs sm:w-auto bg-white text-brand px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-light transition-all shadow-xl">
                  {language === "bn"
                    ? "Free একাউন্ট তৈরি করুন"
                    : "Create Your Free Account"}
                </button>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
