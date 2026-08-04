import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Award,
  HelpCircle,
  CheckCircle2,
  ShieldCheck,
  HelpCircle as HelpIcon,
} from "lucide-react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      icon: Sparkles,
      iconColor: "text-slate-400",
      iconBg: "bg-slate-50",
      description: "Free access for students who want to explore the platform.",
      price: {
        monthly: 0,
        annual: 0,
      },
      cta: "Start Free",
      popular: false,
      features: [
        "Free plan access",
        "No AI tutor usage included",
        "No voice interaction",
        "No practice mode",
        "Great for exploring the experience",
      ],
    },
    {
      name: "Trial",
      icon: Zap,
      iconColor: "text-brand",
      iconBg: "bg-brand/10",
      description:
        "A 3-day window with full premium access to test the product.",
      price: {
        monthly: 0,
        annual: 0,
      },
      cta: "Try 3-Day Premium",
      popular: true,
      features: [
        "Full premium AI access for 3 days",
        "Includes free-chat tutoring",
        "Voice enabled",
        "Practice mode included",
        "Ideal for evaluating the full experience",
      ],
    },
    {
      name: "Pro",
      icon: Award,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
      description:
        "For students who need board-focused help with MCQ and CQ support.",
      price: {
        monthly: 999,
        annual: 999,
      },
      cta: "Choose Pro",
      popular: false,
      features: [
        "MCQ + CQ help",
        "Image drop support",
        "API spend cap of Tk 500/month",
        "Board-focused tutoring support",
        "Billed monthly in Tk",
      ],
    },
    {
      name: "Pro + Practice",
      icon: HelpCircle,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      description: "Adds structured practice sessions to the Pro experience.",
      price: {
        monthly: 1049,
        annual: 1049,
      },
      cta: "Add Practice",
      popular: false,
      features: [
        "Everything in Pro",
        "Practice mode included",
        "Track performance by session",
        "Better exam-prep flow",
        "Billed monthly in Tk",
      ],
    },
    {
      name: "Premium",
      icon: Sparkles,
      iconColor: "text-brand",
      iconBg: "bg-brand/10",
      description:
        "The complete package for full tutoring, voice, and practice access.",
      price: {
        monthly: 2499,
        annual: 2499,
      },
      cta: "Go Premium",
      popular: false,
      features: [
        "Everything in Pro + Practice",
        "Free chat enabled",
        "Voice enabled",
        "Full premium access",
        "API spend cap of Tk 1,600/month",
      ],
    },
  ];

  const comparisonCategories = [
    {
      category: "AI Tutor Access",
      features: [
        {
          name: "Free-chat tutoring",
          basic: "No",
          trial: "Yes",
          pro: "No",
          proPractice: "No",
          premium: "Yes",
        },
        {
          name: "Voice interaction",
          basic: "No",
          trial: "Yes",
          pro: "No",
          proPractice: "No",
          premium: "Yes",
        },
        {
          name: "Image drop input",
          basic: "No",
          trial: "Yes",
          pro: "Yes",
          proPractice: "Yes",
          premium: "Yes",
        },
        {
          name: "MCQ + CQ help",
          basic: "No",
          trial: "Yes",
          pro: "Yes",
          proPractice: "Yes",
          premium: "Yes",
        },
      ],
    },
    {
      category: "Practice & Prep",
      features: [
        {
          name: "Practice mode",
          basic: "No",
          trial: "Yes",
          pro: "No",
          proPractice: "Yes",
          premium: "Yes",
        },
        {
          name: "Board-based question support",
          basic: "No",
          trial: "Yes",
          pro: "Yes",
          proPractice: "Yes",
          premium: "Yes",
        },
        {
          name: "Session-based tracking",
          basic: "No",
          trial: "Yes",
          pro: "No",
          proPractice: "Yes",
          premium: "Yes",
        },
      ],
    },
    {
      category: "Billing & Limits",
      features: [
        {
          name: "API spend cap",
          basic: "None",
          trial: "Included in trial",
          pro: "Tk 500/month",
          proPractice: "Tk 500/month",
          premium: "Tk 1,600/month",
        },
        {
          name: "Top-up credits",
          basic: "No",
          trial: "No",
          pro: "Yes",
          proPractice: "Yes",
          premium: "Yes",
        },
        {
          name: "Payment method",
          basic: "Free",
          trial: "Free",
          pro: "bKash / manual approval",
          proPractice: "bKash / manual approval",
          premium: "bKash / manual approval",
        },
      ],
    },
  ];

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
      a: "Yes! While prices are listed in USD for global standardization, we support bKash, Nagad, Rocket, local cards, and other major mobile banking methods via our secure SSLCommerz checkout page.",
    },
    {
      q: "Can I use E TESTPaper on multiple devices?",
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
      className="py-16 sm:py-24 bg-surface px-4 overflow-hidden relative border-t border-slate-100"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 w-200 h-200 bg-brand/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Invest in your grades, invest in your future
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Choose the perfect plan for your academic goals. Get access to top
            solutions, standard mock test systems, and your personal AI tutor,
            JARVIS.
          </p>

          {/* Toggle for Billing Period */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-bold transition-colors ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-400"}`}
            >
              Monthly Billing
            </span>
            <button
              onClick={() =>
                setBillingPeriod(
                  billingPeriod === "monthly" ? "monthly" : "monthly",
                )
              }
              className="relative w-16 h-8 bg-brand rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              aria-label="Billing period"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-400">
                Tk-based plans
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8 mb-16 sm:mb-24 items-stretch">
          {plans.map((plan, idx) => {
            const planIcon = plan.icon;
            const priceVal = plan.price.monthly;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                  plan.popular
                    ? "border-brand shadow-xl scale-102 lg:scale-105 z-10 p-6 sm:p-8 md:p-10 ring-4 ring-brand/10"
                    : "border-slate-100 shadow-md hover:shadow-lg p-6 sm:p-8"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-brand text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Icon & Plan Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${plan.iconBg}`}
                    >
                      <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        For students
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {priceVal === 0 ? "Free" : `Tk ${priceVal}`}
                    </span>
                    {priceVal > 0 && (
                      <span className="text-slate-500 font-semibold text-sm">
                        / month
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 my-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-slate-700 text-sm"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-brand" : "text-emerald-500"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md ${
                    plan.popular
                      ? "bg-brand hover:bg-brand-hover text-white hover:shadow-brand/20"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Professional Comparison Segment */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Compare Features Side-by-Side
            </h3>
            <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base">
              Take a closer look at the key highlights and limits of each tier
              to find what best fits your needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
            {/* Desktop / Tablet Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider w-[22%]">
                      Features & Limits
                    </th>
                    <th className="p-6 text-sm font-bold text-slate-700 uppercase tracking-wider text-center w-[16%]">
                      Basic
                    </th>
                    <th className="p-6 text-sm font-bold text-brand uppercase tracking-wider text-center w-[16%] bg-brand/5 relative">
                      <div className="absolute top-0 inset-x-0 h-1 bg-brand" />
                      Trial
                    </th>
                    <th className="p-6 text-sm font-bold text-slate-700 uppercase tracking-wider text-center w-[16%]">
                      Pro
                    </th>
                    <th className="p-6 text-sm font-bold text-emerald-600 uppercase tracking-wider text-center w-[16%]">
                      Pro + Practice
                    </th>
                    <th className="p-6 text-sm font-bold text-amber-600 uppercase tracking-wider text-center w-[16%]">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      {/* Category Header Row */}
                      <tr className="bg-slate-50/30">
                        <td
                          colSpan="4"
                          className="px-6 py-4 text-xs font-black text-slate-900 uppercase tracking-widest border-y border-slate-100"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {/* Features */}
                      {category.features.map((item, itemIdx) => (
                        <tr
                          key={itemIdx}
                          className="border-b border-slate-50 hover:bg-slate-50/20 transition-colors"
                        >
                          <td className="p-6 text-slate-800 text-sm font-semibold">
                            {item.name}
                          </td>
                          {/* Starter column */}
                          <td className="p-6 text-center text-sm">
                            {typeof item.basic === "boolean" ? (
                              item.basic ? (
                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-500 font-medium">
                                {item.basic}
                              </span>
                            )}
                          </td>
                          {/* Trial column */}
                          <td className="p-6 text-center text-sm bg-brand/5 font-semibold">
                            {typeof item.trial === "boolean" ? (
                              item.trial ? (
                                <Check className="w-5 h-5 text-brand mx-auto stroke-[2.5]" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-900 font-bold">
                                {item.trial}
                              </span>
                            )}
                          </td>
                          {/* Pro column */}
                          <td className="p-6 text-center text-sm">
                            {typeof item.pro === "boolean" ? (
                              item.pro ? (
                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">
                                {item.pro}
                              </span>
                            )}
                          </td>
                          {/* Pro + Practice column */}
                          <td className="p-6 text-center text-sm">
                            {typeof item.proPractice === "boolean" ? (
                              item.proPractice ? (
                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">
                                {item.proPractice}
                              </span>
                            )}
                          </td>
                          {/* Premium column */}
                          <td className="p-6 text-center text-sm">
                            {typeof item.premium === "boolean" ? (
                              item.premium ? (
                                <Check className="w-5 h-5 text-amber-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">
                                {item.premium}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer CTA */}
            <div className="bg-slate-50/50 p-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand" /> bKash payments
                are manually approved within 2 hours.
              </span>
              <div className="flex gap-4">
                <a
                  href="#demo"
                  className="text-brand font-bold hover:underline"
                >
                  How it works first?
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highly Interactive FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-500 text-sm md:text-base">
              Got questions before you upgrade? We have answers. If you need
              anything else, feel free to contact us.
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
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-extrabold text-slate-800 text-base md:text-lg leading-relaxed">
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
                        <div className="px-6 pb-6 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/20">
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

        {/* Testimonial / Social Proof Section */}
        <section className="mt-16 py-20 bg-white px-4 border border-slate-100 rounded-3xl shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 italic mb-8 leading-relaxed">
              "I used to spend hours searching through YouTube videos and
              guidebooks whenever I got stuck. With E TESTPaper, I can ask
              JARVIS directly and actually understand where I went wrong. It
              feels like having a study partner available whenever I need one."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arif"
                  alt="Student"
                />
              </div>

              <div className="text-left">
                <p className="font-bold text-slate-900">Arif Hossain</p>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
                  HSC Science Student
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
