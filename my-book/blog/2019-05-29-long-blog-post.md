---
slug: long-blog-post
title: My Complete Journey Building an AI-Native Textbook
authors: SAYYED JALEES
tags: [ai-native, hackathon, docusaurus, panaversity]
---

This is a detailed breakdown of my experience participating in the **Panaversity Hackathon: AI-Native Textbook for Physical AI & Humanoid Robotics**.  
In this long-form blog, I’ll walk through my workflow, tools, challenges, and the major breakthroughs I encountered while building a fully automated AI-powered learning system.

Use a `<!-- truncate -->` comment to limit how much appears in the blog list.

<!-- truncate -->

## 🚀 Getting Started — Understanding the Vision

The hackathon is not just a coding challenge — it's a blueprint for how future technical content will be created: AI-generated, agent-enhanced, personalized, and interactive.  
My objective was clear:

- Build a polished Docusaurus textbook  
- Use Spec-Kit Plus & Claude Code to auto-generate content  
- Integrate a RAG chatbot powered by OpenAI Agents  
- Add database + vector search via NeonDB & Qdrant  
- Introduce chapter personalization & Urdu translation  
- Explore reusable intelligence through subagents and agent skills  

---

## 🧩 Phase 1 — Setting Up the Project Scaffold

I began by initializing a fresh **Docusaurus** project.  
From file structure to plugin setup, everything needed to be optimized so that the book could grow automatically using Spec-Kit Plus.

Key steps included:

- Installing dependencies  
- Creating initial docs/pages/folders  
- Connecting GitHub Pages deployment  
- Ensuring the blog and docs systems were clean and organized  

Once this was done, I connected Claude Code to the repo.

---

## 🤖 Phase 2 — AI-Driven Book Creation (Spec-Kit + Claude Code)

This was the real game-changer.  
Using the Spec-Kit Plus architecture, I generated:

- Course outlines  
- Progressive chapters  
- Code examples  
- Diagrams  
- Glossaries  
- Index files  

Claude Code helped automate formatting, summaries, cleanup, and content alignment.

The result:  
A fully structured AI-generated textbook evolving in real time.

---

## 🔍 Phase 3 — Building the RAG Chatbot

To power question-answering inside the book, I set up:

- **FastAPI backend**  
- **Neon Serverless Postgres** for metadata  
- **Qdrant Cloud** for vector embeddings  
- **OpenAI Agents / ChatKit SDK** for intelligent reasoning  

The chatbot can:

- Answer queries based on full textbook content  
- Work with selected text snippets  
- Provide contextual suggestions  
- Maintain conversation memory  

---

## 🎨 Phase 4 — Personalization & Urdu Translation

I implemented two buttons at the top of every chapter:

### ✔️ **Personalize Content**  
Adjusts complexity, examples, tone, and learning depth based on user background.

### ✔️ **Translate to Urdu**  
Instantly converts the entire chapter into fluent, academic-level Urdu.

Both features required front-end customization + agent logic.

---

## 🧠 Phase 5 — Reusable Intelligence with Subagents

Using Claude Code, I experimented with:

- Subagents for code generation  
- Subagents for translation  
- Subagents for summarization  
- Skills that could be reused across chapters  

This made content creation **faster, smarter, and modular**.

---

## 📈 Final Thoughts — What I Learned

This hackathon challenged me to think beyond traditional coding.  
I learned to:

- Combine multiple AI tools  
- Automate textbook creation  
- Build RAG-based intelligent systems  
- Personalize learning experiences  
- Deploy modern AI-powered platforms  

This project is just the beginning — the future of education is AI-native.

Stay tuned — many upgrades coming soon! 🚀
