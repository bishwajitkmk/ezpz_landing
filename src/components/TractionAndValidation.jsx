import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯";

/* The Bengali copy carries Bengali numerals, which parseFloat cannot read —
   without this the ratio comes out NaN and every bar renders empty. */
const toNumber = (raw) => {
  if (raw === undefined || raw === null) return null;

  const normalised = String(raw).replace(/[০-৯]/g, (digit) =>
    String(BENGALI_DIGITS.indexOf(digit)),
  );

  const parsed = Number(normalised.replace(/[^0-9.]/g, ""));

  return Number.isFinite(parsed) ? parsed : null;
};

const toPercentage = (stat) => {
  const value = toNumber(stat?.value);
  const total = toNumber(stat?.total);

  if (value === null || total === null || total <= 0) return null;

  return Math.min((value / total) * 100, 100);
};

const TractionAndValidation = () => {
  const { content } = useLanguage();

  const validation = content?.validation;

  if (!validation) return null;

  /* Only the headline rating is shown — the remaining survey stats stay in the
     content file but are deliberately not rendered. */
  const featured = validation.stats?.[0];

  const featuredPercentage = toPercentage(featured);

  return (
    <section
      id="traction"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white py-20 sm:py-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND

          Drift only — animating `scale` on a heavily blurred layer makes
          Chrome re-rasterise it and the blur flashes as a hard-edged block.
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute -left-40 top-[12%] h-64 w-64 rounded-full bg-brand/[0.07] blur-[90px] sm:h-105 sm:w-105 sm:blur-[120px]"
          animate={{ x: [0, 90, 0], y: [0, 50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-40 top-[45%] h-72 w-72 rounded-full bg-violet-400/[0.07] blur-[90px] sm:h-115 sm:w-115 sm:blur-[130px]"
          animate={{ x: [0, -90, 0], y: [0, -45, 0] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            {validation.eyebrow}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {validation.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            {validation.subheading}
          </p>
        </motion.div>

        {/* =====================================================
            HEADLINE METRIC
        ====================================================== */}

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-12 max-w-4xl sm:mt-16"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.22)]">
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/50 to-transparent" />

              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                {/* Number */}
                <div className="flex flex-col justify-center border-b border-slate-100 p-6 sm:p-10 md:border-b-0 md:border-r">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {validation.metricLabel}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight text-brand sm:text-6xl">
                      {featured.value}
                    </span>

                    {featured.total && (
                      <span className="text-2xl font-bold text-slate-300 sm:text-3xl">
                        / {featured.total}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-slate-500">
                    {featured.label}
                  </p>
                </div>

                {/* Progress */}
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <div className="flex items-end justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">
                        {validation.signalTitle}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {validation.signalNote}
                      </p>
                    </div>

                    {featuredPercentage !== null && (
                      <span className="shrink-0 text-sm font-bold text-brand">
                        {Math.round(featuredPercentage)}%
                      </span>
                    )}
                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${featuredPercentage ?? 0}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-full rounded-full bg-linear-to-r from-brand to-violet-500"
                    >
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
                    </motion.div>
                  </div>

                  <div className="mt-4 flex justify-between text-[11px] font-medium text-slate-400">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =====================================================
            TESTIMONIALS
        ====================================================== */}

        {validation.quotes?.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 flex items-center gap-6 sm:gap-8">
              <div className="shrink-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {validation.quotesEyebrow}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {validation.quotesSubheading}
                </p>
              </div>

              <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {validation.quotes.map((item, idx) => (
                <motion.figure
                  key={`${item.name}-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)] sm:p-9"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                        <Quote className="h-4 w-4 fill-current" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
                    </div>

                    <blockquote className="mt-6 flex-1 text-base font-medium leading-7 text-slate-700 sm:mt-7 sm:text-xl sm:leading-9">
                      “{item.quote}”
                    </blockquote>

                    <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-slate-100 pt-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
                        {item.name?.charAt(0)?.toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900">
                          {item.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {item.role}
                        </p>
                      </div>

                      <div className="ml-auto flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {validation.verifiedLabel}
                      </div>
                    </figcaption>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            SOURCE NOTE
        ====================================================== */}

        {validation.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-2xl text-center text-[11px] leading-5 text-slate-400"
          >
            {validation.note}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default TractionAndValidation;
