import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Crown, Zap, Lock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const PRO_PRICE = 999;
const PRACTICE_ADDON_PRICE = 50;
const PREMIUM_PRICE = 2499;

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const formatPrice = (value, language) => {
  const formatted = value.toLocaleString("en-US");

  if (language !== "bn") return formatted;

  return formatted.replace(/\d/g, (digit) => BENGALI_DIGITS[Number(digit)]);
};

/*
  Feature rows per tier. `true` is included, `false` is not, and "addon" is the
  Practice row on Pro — it only turns into a tick once the add-on is switched on.
*/
const tierFeatures = {
  basic: [
    ["solutions", true],
    ["questionBank", true],
    ["mcq", false],
    ["cq", false],
    ["practice", false],
    ["teacherPanel", false],
    ["imageDrop", false],
    ["voice", false],
  ],
  pro: [
    ["mcq", true],
    ["cq", true],
    ["solutions", true],
    ["questionBank", true],
    ["imageDrop", true],
    ["practice", "addon"],
    ["teacherPanel", false],
    ["voice", false],
  ],
  premium: [
    ["everythingPro", true],
    ["teacherPanel", true],
    ["practiceIncluded", true],
    ["imageDrop", true],
    ["voice", true],
  ],
};

/* Per-tier accent, so each card keeps one colour family. */
const accents = {
  basic: "text-blue-500",
  pro: "text-brand",
  premium: "text-amber-500",
};

const FeatureRow = ({ label, state, tier }) => {
  if (state === "addon") {
    return (
      <li className="flex items-center gap-3 text-sm text-slate-700">
        <span className="flex w-5 shrink-0 justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
        </span>
        <span>{label}</span>
      </li>
    );
  }

  return (
    <li
      className={`flex items-center gap-3 text-sm ${
        state ? "text-slate-700" : "text-slate-400"
      }`}
    >
      {state ? (
        <CheckCircle2 className={`w-5 h-5 shrink-0 ${accents[tier]}`} />
      ) : (
        <XCircle className="w-5 h-5 shrink-0 text-slate-300" />
      )}
      <span>{label}</span>
    </li>
  );
};

const Pricing = () => {
  const [practiceAddon, setPracticeAddon] = useState(false);
  const { content, language } = useLanguage();

  const tiers = content.pricing.tiers;
  const featureNames = content.pricing.featureNames;
  const perMonth = content.pricing.perMonthShort;

  const proPrice = practiceAddon ? PRO_PRICE + PRACTICE_ADDON_PRICE : PRO_PRICE;

  const renderFeatures = (tier) =>
    tierFeatures[tier].map(([key, state]) => (
      <FeatureRow
        key={key}
        tier={tier}
        label={featureNames[key]}
        state={state === "addon" && practiceAddon ? true : state}
      />
    ));

  const faqs = [
    {
      q: "Can I upgrade, downgrade, or cancel at any time?",
      a: "Yes, absolutely! E TESTPaper has no long-term contracts. You can easily upgrade, downgrade, or cancel your subscription directly from your account settings with just a few clicks.",
    },
    {
      q: "How does the grade improvement guarantee work?",
      a: "We are so confident in our Elite Academy curriculum that if you complete at least 85% of your customized study plans and practice sessions, and don't improve your Physics mock exam or board scores, we will refund 100% of your tuition fees.",
    },
    {
      q: "Is there any localized payment method like bKash or Nagad?",
      a: "Yes! The prices are listed in BDT for local standardization We support bKash, Nagad, Rocket, local cards and other major mobile banking methods via our secure SSLCommerz checkout page.",
    },
    {
      q: "Can I use EZPZ on multiple devices?",
      a: "You can sign in and sync your progress on any of your personal devices (phone, tablet, computer). For security reasons, active sessions are limited to prevent simultaneous multi-device sharing.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 overflow-hidden relative border-t border-slate-100 bg-linear-to-br from-amber-50 via-white to-violet-100"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 sm:w-200 sm:h-200 bg-brand/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {content.pricing.chooseHeading}
          </h2>
        </div>

        {/* =====================================================
            PLAN CARDS
        ====================================================== */}

        {/* Three tiers only get their own column at lg — at md they squeeze to
            ~230px and the feature rows wrap badly. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 sm:mb-24 max-w-md mx-auto lg:max-w-none">
          {/* =================================================
              BASIC
          ================================================== */}

          <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              {tiers.basic.label}
            </p>

            <p className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              {tiers.basic.price}
            </p>

            <p className="mt-2 text-sm text-slate-500">{tiers.basic.note}</p>

            <ul className="mt-7 space-y-3.5 flex-1">
              {renderFeatures("basic")}
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-full border border-slate-200 bg-white py-3.5 px-6 text-sm font-bold text-blue-600 transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              {tiers.basic.cta}
            </button>
          </div>

          {/* =================================================
              PRO
          ================================================== */}

          <div className="relative flex flex-col rounded-3xl border border-brand/20 bg-white p-6 sm:p-8 shadow-xl ring-1 ring-brand/5 lg:-mt-2">
            <span className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
              <Crown className="w-3.5 h-3.5" />
              {tiers.pro.badge}
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {tiers.pro.label}
            </p>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                ৳{formatPrice(proPrice, language)}
              </span>

              <span className="text-sm font-medium text-slate-500">
                {perMonth}
              </span>
            </div>

            <ul className="mt-7 space-y-3.5 flex-1">{renderFeatures("pro")}</ul>

            {/* PRACTICE ADD-ON SWITCH */}

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-800">
                  {tiers.pro.addonTitle}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  +৳{formatPrice(PRACTICE_ADDON_PRICE, language)} → ৳
                  {formatPrice(PRO_PRICE + PRACTICE_ADDON_PRICE, language)}
                  {perMonth}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={practiceAddon}
                aria-label={tiers.pro.addonAria}
                onClick={() => setPracticeAddon((prev) => !prev)}
                /* `before` widens the touch target to ~68x48 without changing
                   how the switch looks. */
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 before:absolute before:-inset-2.5 before:content-[''] ${
                  practiceAddon ? "bg-brand" : "bg-slate-200"
                }`}
              >
                <motion.span
                  className="absolute top-1 left-1 block h-5 w-5 rounded-full bg-white shadow"
                  animate={{ x: practiceAddon ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                />
              </button>
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-brand py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-opacity hover:opacity-90"
            >
              <Zap className="w-4 h-4" />
              {tiers.pro.cta}
            </button>
          </div>

          {/* =================================================
              PREMIUM
          ================================================== */}

          <div className="relative flex flex-col rounded-3xl border border-amber-200/70 bg-white p-6 sm:p-8 shadow-sm">
            <span className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-amber-950 shadow-md">
              <Crown className="w-3.5 h-3.5" />
              {tiers.premium.badge}
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              {tiers.premium.label}
            </p>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                ৳{formatPrice(PREMIUM_PRICE, language)}
              </span>

              <span className="text-sm font-medium text-slate-500">
                {perMonth}
              </span>
            </div>

            <ul className="mt-7 space-y-3.5 flex-1">
              {renderFeatures("premium")}
            </ul>

            <div className="mt-8 flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm font-semibold text-amber-800">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-500" />
              {tiers.premium.includedNote}
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 py-3.5 px-6 text-sm font-bold text-amber-950 shadow-lg shadow-amber-400/25 transition-colors hover:bg-amber-300"
            >
              <Lock className="w-4 h-4" />
              {tiers.premium.cta}
            </button>
          </div>
        </div>

        {/* Highly Interactive FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              {content.pricing.faqHeading}
            </h3>
            <p className="text-slate-500 text-sm md:text-base">
              {content.pricing.faqDescription}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-3 sm:gap-4 focus:outline-none"
                  >
                    <span className="font-extrabold text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand/10 text-brand" : "text-slate-500"}`}
                    >
                      <svg
                        className="w-4 h-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
