<!--
Sync Impact Report:
Version change: 1.1 -> 1.0 (major version downgrade/reset for new project specification)
Modified principles:
  - AI-first, agent-native learning architecture
  - Modular, reusable, scalable content design
  - All chapters must end with quizzes, exercises, diagrams
  - All content must be robotics-focused, real-world, and practical
  - Book must be easy to navigate and AI-interactable
Added sections: None (existing sections updated)
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics — Complete AI-Native Textbook Constitution

## Core Principles

### I. AI-first, agent-native learning architecture
The textbook's content and interactive elements MUST be designed with an AI-first, agent-native learning architecture, leveraging AI to enhance educational outcomes and interactivity.

### II. Modular, reusable, scalable content design
Content MUST be modular, reusable across different sections and formats, and designed to scale for future expansions and updates.

### III. All chapters must end with quizzes, exercises, diagrams
Every chapter MUST conclude with comprehensive quizzes, practical exercises, and illustrative diagrams to reinforce learning and engagement.

### IV. All content must be robotics-focused, real-world, and practical
The content MUST prioritize robotics-focused, real-world applications and practical implementations to provide tangible skills and understanding.

### V. Book must be easy to navigate and AI-interactable
The book's structure and interface MUST facilitate easy navigation and provide seamless AI-driven interaction capabilities.

## Description
This project will produce a complete AI-native technical textbook for the Physical AI & Humanoid Robotics course.
The book will be written using Docusaurus, Spec-Kit Plus, and Claude Code. It will include complete chapters,
diagrams, exercises, quizzes, labs, and hands-on robotics tasks aligned with modern AI-native learning.

The book must integrate:
- A Retrieval-Augmented Generation (RAG) chatbot
- OpenAI Agents or ChatKit SDK
- FastAPI backend
- Neon Serverless Postgres
- Qdrant Cloud vector search
- Personalized content buttons
- Urdu translation button
- Signup/Signin using Better-Auth
- Optional Claude Subagents for bonus 50 points

## Content Structure

Defines the organization of chapters, sections, and sub-sections within the Docusaurus framework. This includes guidelines for markdown files, asset placement, and navigation.

## Generation Workflow

Outlines the process for content creation, review, build, and deployment using Docusaurus. Includes steps for local development, staging, and production publishing.

## Governance

This constitution supersedes all other content development practices.
Amendments require team consensus, documentation, and a clear migration plan for affected content.
All content submissions and reviews MUST verify compliance with these principles.

**Version**: 1.0 | **Ratified**: 2025-11-30 | **Last Amended**: 2025-11-30
