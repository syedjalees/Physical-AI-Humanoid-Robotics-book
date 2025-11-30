# Implementation Plan: Physical AI & Humanoid Robotics Textbook

**Branch**: `001-ai-robotics-textbook` | **Date**: 2025-11-30 | **Spec**: specs/001-ai-robotics-textbook/spec.md
**Input**: Feature specification from `specs/001-ai-robotics-textbook/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

The goal is to create a complete AI-native textbook for the Physical AI & Humanoid Robotics course using Docusaurus, Spec-Kit Plus, and Claude Code. This textbook will feature 12–15 chapters covering theory, practical labs, robotics programming, mechanical systems, simulation, sensors, humanoid locomotion, reinforcement learning, and control systems. It will integrate an AI-powered RAG chatbot, personalization, Urdu translation, and optional authentication via Better-Auth, deployed on GitHub Pages with a FastAPI backend, Neon Serverless Postgres, and Qdrant Cloud.

## Technical Context

**Language/Version**: TypeScript-first for frontend, Python (FastAPI) for backend
**Primary Dependencies**: Docusaurus 3.x, React 19.x, FastAPI, Neon Serverless Postgres, Qdrant Cloud, OpenAI Agents/ChatKit SDK, Better-Auth
**Storage**: Neon Serverless Postgres (user profiles, preferences, reading progress), Qdrant Cloud (book embeddings)
**Testing**: Frontend: Jest/React Testing Library; Backend: Pytest; AI: Dedicated unit/integration tests for Docusaurus content, FastAPI endpoints, and AI integrations (chatbot, personalization, translation).
**Target Platform**: Web (Docusaurus for frontend, FastAPI for backend)
**Project Type**: Web application (Frontend: Docusaurus, Backend: FastAPI)
**Performance Goals**: Response times for 90% of chatbot queries must be under 1.5 seconds.
**Constraints**: Code must adhere to established linting rules (ESLint, Prettier for frontend; Flake8, Black for backend) and follow TypeScript best practices for frontend, and FastAPI best practices for backend.
**Scale/Scope**: 12-15 chapters, AI-native textbook with RAG chatbot, personalization, Urdu translation, and authentication.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

-   **I. AI-first, agent-native learning architecture**: All content and interactive elements MUST be designed with an AI-first, agent-native learning architecture. (✅ Pass)
-   **II. Modular, reusable, scalable content design**: Content MUST be modular, reusable, and scalable. (✅ Pass)
-   **III. All chapters must end with quizzes, exercises, diagrams**: Every chapter MUST conclude with comprehensive quizzes, practical exercises, and illustrative diagrams to reinforce learning and engagement. (✅ Pass)
-   **IV. All content must be robotics-focused, real-world, and practical**: Content MUST prioritize robotics-focused, real-world applications and practical implementations. (✅ Pass)
-   **V. Book must be easy to navigate and AI-interactable**: The book's structure and interface MUST facilitate easy navigation and provide seamless AI-driven interaction capabilities. (✅ Pass)

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-robotics-textbook/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
my-book/
├── docs/                 # Docusaurus markdown chapters
├── src/                  # Docusaurus React components (chatbot UI, personalization, translation buttons)
│   ├── components/
│   ├── pages/
│   └── theme/
├── api/                  # FastAPI backend
│   ├── main.py           # Main FastAPI application
│   ├── routes/           # API endpoints
│   ├── services/         # Business logic
│   ├── models/           # Pydantic models
│   └── auth/             # Better-Auth implementation
├── rag/                  # RAG pipeline specific code (Qdrant integration, embedding generation)
│   └── subagents/        # AI Subagents for summarization, quiz generation, code generation
├── personalization/      # Personalization engine logic
├── translation/          # Urdu translation module
├── tests/                # Unit and integration tests for backend, frontend, and AI components
└── docusaurus.config.js
```

**Structure Decision**: The project will follow a hybrid structure with Docusaurus frontend components in `my-book/src/`, markdown content in `my-book/docs/`, and a separate FastAPI backend in `my-book/api/`. Additional AI-related modules will be in `my-book/rag/`, `my-book/personalization/`, and `my-book/translation/`. AI subagents will reside in the 'my-book/rag/subagents/' directory.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Integrated within FastAPI backend | These are core to the AI-native aspect of the book and require careful design to ensure scalability and maintainability. | Oversimplification could lead to a brittle system that is hard to extend or debug. |

