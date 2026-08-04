import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import JarvisDemo from "./components/JarvisDemo";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";

const App = () => {
  const [showBlog, setShowBlog] = useState(false);

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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand/10 selection:text-brand">
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
            <JarvisDemo />
            <Pricing />

            {/* Final CTA Section */}
            <section className="py-24 px-4 bg-brand relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2" />
              </div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Ready to master Physics?
                </h2>
                <p className="text-brand-light/80 text-lg mb-10 max-w-xl mx-auto">
                  Join thousands of students who are already using E TESTPaper
                  to ace their board exams.
                </p>
                <button className="bg-white text-brand px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-light transition-all shadow-xl">
                  Create Your Free Account
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
