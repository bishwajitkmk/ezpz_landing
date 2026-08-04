import React from "react";
import logo from "../assets/smart_learning_icon_only.svg";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center ring-1 ring-brand/20">
                <img
                  src={logo}
                  alt="EzPz logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                E TESTPaper
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {content.footer.description}
            </p>
            <div className="flex gap-4">
              {/* Custom Twitter / X Icon */}
              <a
                href="#"
                className="text-slate-400 hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Custom Github Icon */}
              <a
                href="#"
                className="text-slate-400 hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
              </a>
              {/* Custom Linkedin Icon */}
              <a
                href="#"
                className="text-slate-400 hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">
              {content.footer.platform}
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.questionBank}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.aiTutor}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.mcqPractice}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.boardSolutions}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">
              {content.footer.resources}
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.syllabus}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.studyGuides}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  {content.footer.links.helpCenter}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">
              {content.footer.newsletterHeading}
            </h4>
            <p className="text-slate-500 text-sm mb-4">
              {content.footer.newsletterDescription}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm flex-1 outline-none focus:border-brand transition-colors"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                {content.footer.join}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 uppercase tracking-widest font-bold">
          <p>{content.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">
              {content.footer.privacy}
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              {content.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
