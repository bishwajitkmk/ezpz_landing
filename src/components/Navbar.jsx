import React, { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import logo from "../assets/smart_learning_icon_only.svg";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = ({ onNavigateToBlog, onNavigateHome, onNavigateLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleLanguage, content } = useLanguage();

  const closeMenu = () => setMobileMenuOpen(false);

  /* Rotating the phone past the md breakpoint would otherwise leave the panel
     mounted but invisible, and the page scroll-locked. */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const desktop = window.matchMedia("(min-width: 768px)");

    const handleBreakpoint = (event) => {
      if (event.matches) setMobileMenuOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    desktop.addEventListener("change", handleBreakpoint);
    window.addEventListener("keydown", handleKeyDown);

    /* Stop the page behind the open menu from scrolling under the finger. */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      desktop.removeEventListener("change", handleBreakpoint);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

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
    /* Fixed elements sit outside the body's safe-area padding, so the bar
       carries its own — otherwise the logo lands under the notch in
       landscape. */
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
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

          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <button
              type="button"
              className="flex invisible h-11 w-11 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
              onClick={toggleLanguage}
              aria-label="Switch language"
            >
              <Languages className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={onNavigateLogin}
                className="relative overflow-hidden text-sm font-medium text-slate-600 px-4 py-2 rounded-full transition-all duration-300 hover:text-black before:absolute before:inset-0 before:rounded-full before:bg-brand/10 before:scale-0 before:transition-transform before:duration-200 hover:before:scale-105"
              >
                <span className="relative z-10">{content.navbar.login}</span>
              </button>
              <button
                type="button"
                onClick={(event) => scrollToSection(event, "get-started")}
                className="bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-hover transition-all shadow-sm"
              >
                {content.navbar.getStarted}
              </button>
            </div>
            <button
              type="button"
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={content.navbar.mobileMenuLabel}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            /* Scrolls internally so the panel still works on a landscape phone,
               where the viewport is only a few hundred pixels tall. */
            className="md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-slate-100 bg-white/95 backdrop-blur py-3 pb-[calc(1rem+env(safe-area-inset-bottom))] space-y-1"
          >
            <a
              href="#features"
              onClick={(event) => scrollToSection(event, "features")}
              className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-slate-600 active:bg-slate-50"
            >
              {content.navbar.features}
            </a>
            <a
              href="#demo"
              onClick={(event) => scrollToSection(event, "demo")}
              className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-slate-600 active:bg-slate-50"
            >
              {content.navbar.howItWorks}
            </a>
            <a
              href="#pricing"
              onClick={(event) => scrollToSection(event, "pricing")}
              className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-slate-600 active:bg-slate-50"
            >
              {content.navbar.pricing}
            </a>
            <button
              type="button"
              onClick={handleBlogClick}
              className="flex min-h-11 w-full items-center rounded-xl px-3 text-left text-base font-medium text-slate-600 active:bg-slate-50"
            >
              {content.navbar.blog}
            </button>
            <div className="flex flex-col gap-2 px-1 pt-3">
              <button
                type="button"
                onClick={onNavigateLogin}
                className="min-h-11 w-full rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-600"
              >
                {content.navbar.signIn}
              </button>
              <button
                type="button"
                onClick={(event) => scrollToSection(event, "get-started")}
                className="min-h-11 w-full rounded-full bg-brand px-4 text-sm font-semibold text-white"
              >
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
