# EzPz

**AI tutoring platform for HSC students in Bangladesh — built around all nine exam boards, bilingual by design.**

EzPz pairs a digitised, board-verified question bank with three subject-specific AI tutors, delivered in Bangla and English, backed by a production database, credit-based billing, and Postgres Row Level Security.

---

## Table of Contents

- [Overview](#overview)
- [Problem It Solves](#problem-it-solves)
- [Who It's For](#who-its-for)
- [Features](#features)
- [AI Tutors](#ai-tutors)
- [Tech Architecture](#tech-architecture)
- [Security Model](#security-model)
- [Content Pipeline](#content-pipeline)
- [Design System — Colors & UI](#design-system--colors--ui)
- [Pricing](#pricing)
- [Current Limitations](#current-limitations)
- [Roadmap](#roadmap)

---

## Overview

EzPz is a **live, deployed** product — not a concept. It gives HSC students structured, board-accurate exam prep through AI tutors that explain verified official solutions rather than generating new (and potentially wrong) ones.

## Problem It Solves

1. HSC exam prep in Bangladesh is fragmented across coaching centers, printed guidebooks, and generic study material — none built around the actual nine-board exam system.
2. No widely available tool lets a student practice real, board-specific past questions across all nine boards (Dhaka, Chittagong, Rajshahi, Comilla, Sylhet, Barisal, Jessore, Mymensingh, Dinajpur) with guided explanations.
3. No tool teaches a full chapter serially, topic by topic — the structured path a real tutor gives — instead of just answering isolated questions.
4. Families default to costly private tutoring or coaching centers to fill both gaps.

## Who It's For

- HSC students nationwide, across all nine exam boards
- Students outside Dhaka and other major cities, where strong subject tutors are hardest to access
- Cost-sensitive families currently paying for private tutoring/coaching to fill the same gap
- Bengali-medium students — every question and explanation is natively authored in Bangla, not translated as an afterthought

## Features

| Feature | Description |
|---|---|
| **Three AI Subject Tutors** | JARVIS (Physics), ALGEBRO (Math), AURUM (Chemistry) — each with its own tuned system prompts, per subject and per paper |
| **Two Tutoring Modes** | Question-attached mode (works through real board CQ/MCQ questions sub-question by sub-question) and Free-chat mode (open-ended teaching on any syllabus topic) |
| **Bilingual by Design** | Every question, solution, and prompt exists natively in English and Bangla — 12 separate prompt files |
| **Voice Interaction** | Google Text-to-Speech and Speech-to-Text power spoken tutoring |
| **Board-Verified Question Bank** | Physics and Math fully digitised across all nine boards; Chemistry and practice bank completed |
| **Practice Mode** | MCQ Drill filtered by subject, paper, chapter — with score, accuracy, and duration tracked per session |
| **Mock Test Mode** *(in development)* | Full mock exams across all three subjects, chapter or full-paper scope, score screen with per-wrong-answer AI explanations |
| **Progress & Roadmap Tracking** | Tracks exactly which subtopics have already been taught per student per chapter, feeding a personalised learning path |

## AI Tutors

| Tutor | Subject | Endpoint |
|---|---|---|
| **JARVIS** | Physics | `/api/tutor/chat`, `/api/tutor/free-chat` |
| **ALGEBRO** | Math | `/api/tutor/chat`, `/api/tutor/algebro-chat` |
| **AURUM** | Chemistry | `/api/tutor/chat`, `/api/tutor/aurum-chat` |

Each tutor ships in both languages, and JARVIS additionally has a versioned, paper-specific set (v1 general + v2 1st/2nd Paper) — 12 system prompt files total.

## Tech Architecture

**Database — 13 live production tables:** `students`, `questions`, `cq_sub_questions`, `solutions` *(legacy)*, `mcq_options`, `progress`, `practice_sessions`, `practice_answers`, `practice_questions`, `ai_tutor_usage`, `credit_transactions`, `subscription_payments`, `study_sessions`, `jarvis_response_cache`, `chapter_progress`, `basic_credit_transactions` *(legacy)*.

**Cost control:**
- 150-credit reserve deducted upfront per AI session; unused credits auto-refunded after actual token cost is calculated
- Static system prompts sent with `cache_control: ephemeral` to cut repeat-conversation cost
- `jarvis_response_cache` serves the first-ever response to a question instantly to every later student — zero added AI cost
- Voice runs on Google TTS/STT (ElevenLabs evaluated and removed)

## Security Model

- Row Level Security (RLS) enforced on **every** table, not selectively
- Students can read/write only their own rows — no reliance on application-layer trust
- `is_correct` on MCQs is never exposed via RLS — reachable only through the `service_role` API
- `deduct_credits()` is `service_role`-only — credit deductions cannot be forged client-side
- `handle_new_user()` trigger auto-grants 50 trial credits and starts the 3-day trial on signup — no manual admin step

## Content Pipeline

1. Source a physical board exam PDF
2. Run a Python generation script (`gen-[board]-[year]-[subject]-[paper]-json.py`) to structure the data
3. Output standardised JSON: `data/[board]-[year]-[subject]-[paper].json`
4. `node scripts/insert-board-cq.js` — insert into local Supabase for review
5. `python _deploy.py` — push verified content to production

**Translation rule:** Bangla solutions are transcribed verbatim from official board PDFs; English is translated directly from the Bangla — never independently written — keeping both versions identical in fact and math. Diagrams are embedded as base64 JPEG, sourced from photographs of original papers (no external image hosting).

## Design System — Colors & UI

Suggested landing-page palette — built for a focused, trustworthy study-tool feel with a clear per-tutor accent system:

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary (Brand) | Deep Indigo | `#3730A3` | Nav, primary buttons, headings |
| Primary Light | Indigo Tint | `#6366F1` | Hover states, links, active tabs |
| JARVIS Accent | Electric Blue | `#0EA5E9` | Physics tutor badges, icons |
| ALGEBRO Accent | Emerald Green | `#10B981` | Math tutor badges, icons |
| AURUM Accent | Amber Gold | `#F59E0B` | Chemistry tutor badges, icons |
| Background | Off-White | `#F8FAFC` | Page background |
| Surface | White | `#FFFFFF` | Cards, modals |
| Text — Primary | Slate 900 | `#0F172A` | Body copy, headings |
| Text — Muted | Slate 500 | `#64748B` | Secondary text, captions |
| Success | Green | `#22C55E` | Correct answers, upgrades |
| Warning / Error | Red | `#EF4444` | Incorrect answers, alerts |
| Border | Slate 200 | `#E2E8F0` | Dividers, input borders |

**Design notes:**
- One neutral brand color (indigo) keeps the shell consistent; each tutor gets its own accent so students visually associate a color with a subject across the whole product
- Bangla and English type should share the same weight scale — avoid making Bangla text feel like an "afterthought" font
- Dark mode variant: invert background/surface to `#0F172A` / `#1E293B`, keep tutor accents unchanged for recognizability

## Pricing

*Current, restructured tier system — supersedes earlier EzPz pricing materials.*

| Tier | Price | AI Features | Free Chat | Voice | Practice |
|---|---|---|---|---|---|
| Basic | Free | None | No | No | No |
| Trial | Free (3 days) | Full Premium | Yes | Yes | Yes |
| Pro | Tk 999/mo | MCQ + CQ help, image drop | No | No | No |
| Pro + Practice | Tk 1,049/mo | Same as Pro + Practice | No | No | Yes |
| Premium | Tk 2,499/mo | Everything | Yes | Yes | Yes |

- API spend cap: Tk 500/month (Pro), Tk 1,600/month (Premium) — protects margin against usage spikes
- Top-up credits available anytime, never expire
- Payment via bKash only, manual admin approval within 2 hours

## Current Limitations

- **Mock test mode** — only MCQ Drill is live today; full mock exams are specified and confirmed, in development
- **Math/Chemistry practice UI** — database supports it, but only Physics practice questions currently surface in the UI
- **Push notifications & streak reminders** — not yet built
- **Analytics dashboard** — a study-hours card exists; no full analytics page yet
- **Social features** — leaderboard exists as a concept only, not implemented

## Roadmap

- Ship Mock Test mode: subject selection, chapter/full-paper scope, score screen with per-wrong-answer AI explanations
  - Open decision: default to real HSC format (25 MCQs / 25 min) vs. student-set question count
- Surface Math and Chemistry practice questions in the UI
- Build full student analytics dashboard
- Push notifications and streak reminders
- Implement leaderboard / social features

---

**EzPz** — a working product, not a concept: real production database, real security model, real AI cost-control architecture, and a content pipeline that has already digitised hundreds of real board questions.

*Prepared by Md. Tanvir Alam, Founder, EzPz.*