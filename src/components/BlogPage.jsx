import React from "react";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

const posts = [
  {
    title: "How AI-powered study tools are changing exam prep",
    excerpt:
      "Discover why students are switching from passive note-taking to smart, interactive learning experiences.",
    category: "Insights",
  },
  {
    title: "3 ways to stay consistent with your revision plan",
    excerpt:
      "Simple habits that make daily practice feel manageable and help you build momentum.",
    category: "Study Tips",
  },
  {
    title: "Why visual explanations make difficult subjects easier",
    excerpt:
      "A closer look at how step-by-step guidance helps students understand tough concepts faster.",
    category: "Learning",
  },
];

const BlogPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-2 text-brand mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Learn smarter with the E TESTPaper blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Read practical study advice, product updates, and ideas for making
            exam prep feel lighter and more effective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-brand mb-3">
                <Sparkles className="w-4 h-4" />
                {post.category}
              </div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
