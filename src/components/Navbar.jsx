import React, { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import logo from "../assets/smart_learning_icon_only.svg";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = ({ onNavigateToBlog, onNavigateHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleLanguage, content } = useLanguage();

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    closeMenu();

    if (onNavigateHome) {
      onNavigateHome(sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbarOffset = 88;
    const topPosition =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  const handleBlogClick = (event) => {
    event.preventDefault();
    onNavigateToBlog?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const handleBrandClick = (event) => {
    event.preventDefault();
    onNavigateHome?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 ring-1 ring-brand/20">
              <img
                src={logo}
                alt="EzPz logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <button
              type="button"
              onClick={handleBrandClick}
              className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight truncate"
            >
              {content.navbar.brand}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              onClick={(event) => scrollToSection(event, "features")}
              className="text-sm font-medium text-slate-600 hover:text-brand hover:scale-125 transition-all duration-300"
            >
              {content.navbar.features}
            </a>
            <a
              href="#demo"
              onClick={(event) => scrollToSection(event, "demo")}
              className="text-sm font-medium text-slate-600 hover:text-brand hover:scale-125 transition-all duration-300"
            >
              {content.navbar.howItWorks}
            </a>
            <a
              href="#pricing"
              onClick={(event) => scrollToSection(event, "pricing")}
              className="text-sm font-medium text-slate-600 hover:text-brand hover:scale-125 transition-all duration-300"
            >
              {content.navbar.pricing}
            </a>
            <button
              type="button"
              onClick={handleBlogClick}
              className="text-sm font-medium text-slate-600 hover:text-brand hover:scale-125 transition-all duration-300"
            >
              {content.navbar.blog}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="relative overflow-hidden text-sm font-medium text-slate-600 px-4 py-2 rounded-full transition-all duration-300 hover:text-black before:absolute before:inset-0 before:rounded-full before:bg-brand/10 before:scale-0 before:transition-transform before:duration-200 hover:before:scale-105">
              <span className="relative z-10">{content.navbar.login}</span>
            </button>
            <button className="bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-hover transition-all shadow-sm">
              {content.navbar.getStarted}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-full text-slate-600 hover:bg-slate-100"
              onClick={toggleLanguage}
              aria-label="Switch language"
            >
              <Languages className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="md:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={content.navbar.mobileMenuLabel}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur py-4 space-y-3">
            <a
              href="#features"
              onClick={(event) => scrollToSection(event, "features")}
              className="block px-1 py-2 text-sm font-medium text-slate-600"
            >
              {content.navbar.features}
            </a>
            <a
              href="#demo"
              onClick={(event) => scrollToSection(event, "demo")}
              className="block px-1 py-2 text-sm font-medium text-slate-600"
            >
              {content.navbar.howItWorks}
            </a>
            <a
              href="#pricing"
              onClick={(event) => scrollToSection(event, "pricing")}
              className="block px-1 py-2 text-sm font-medium text-slate-600"
            >
              {content.navbar.pricing}
            </a>
            <button
              type="button"
              onClick={handleBlogClick}
              className="block w-full text-left px-1 py-2 text-sm font-medium text-slate-600"
            >
              {content.navbar.blog}
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
                {content.navbar.signIn}
              </button>
              <button className="w-full rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">
                {content.navbar.getStarted}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
