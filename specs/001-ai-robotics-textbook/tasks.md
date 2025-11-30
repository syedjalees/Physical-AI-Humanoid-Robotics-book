description: "Task list for Physical AI & Humanoid Robotics Textbook implementation"
---

# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `specs/001-ai-robotics-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are included based on the specified testing strategy (Jest/React Testing Library, Pytest, dedicated unit/integration tests for AI).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `my-book/src/` (frontend), `my-book/api/` (backend)
- Paths shown below adjust based on `plan.md` structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for Docusaurus frontend and FastAPI backend.

- [X] T001 Initialize Docusaurus project (already done: `my-book/`)
- [X] T002 Configure TypeScript for Docusaurus components in `my-book/src/`
- [X] T003 [P] Configure ESLint and Prettier for frontend in `my-book/`
- [ ] T004 Initialize FastAPI backend project in `my-book/api/`
- [ ] T005 [P] Configure Python linting (Flake8, Black) for backend in `my-book/api/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure for authentication, database, and base models that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Setup Neon Postgres database connection in `my-book/api/config.py`
- [ ] T007 Implement Better-Auth signup/signin routes in `my-book/api/auth/routes.py`
- [ ] T008 Create UserProfile model for Neon Postgres in `my-book/api/models/user.py`
- [ ] T009 Implement basic user authentication middleware in `my-book/api/middleware/auth.py`
- [ ] T010 Configure logging and error handling for FastAPI in `my-book/api/main.py`
- [ ] T011 Initialize Qdrant Cloud client in `my-book/rag/qdrant_client.py`
- [ ] T012 Implement embedding generation service (e.g., OpenAI) in `my-book/rag/embedding_service.py`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Student Reads (Priority: P1) 🎯 MVP

**Goal**: A student can open the book, read chapters with diagrams, code, and robotics labs.

**Independent Test**: The Docusaurus site renders correctly with initial chapter content; basic navigation works.

### Tests for User Story 1

- [ ] T013 [P] [US1] Unit test Docusaurus components in `my-book/src/components/`
- [ ] T014 [P] [US1] Integration test for basic Docusaurus routing/rendering in `my-book/tests/frontend/`

### Implementation for User Story 1 (Content Generation Workflow)

- [ ] T015 [US1] Define 12-15 chapter titles and high-level learning objectives (human/SME-driven)
- [ ] T016 [US1] Create `chapter_template.md` in `my-book/docs/templates/` with placeholders for all content sections
- [ ] T017 [US1] [P] Generate initial drafts for Chapter 1 Introduction and Theory using Content Drafting Agent (CDA) in `my-book/docs/chapter1.md`
- [ ] T018 [US1] [P] Generate initial drafts for Chapter 2 Introduction and Theory using Content Drafting Agent (CDA) in `my-book/docs/chapter2.md`
- ... (repeat for all 15 chapters)
- [ ] T031 [US1] [P] Generate initial drafts for Chapter 15 Introduction and Theory using Content Drafting Agent (CDA) in `my-book/docs/chapter15.md`
- [ ] T032 [US1] [P] Integrate examples and Python/JS code samples for Chapter 1 using Example & Code Generation Agent (ECGA) in `my-book/docs/chapter1.md`
- ... (repeat for all 15 chapters)
- [ ] T046 [US1] [P] Integrate examples and Python/JS code samples for Chapter 15 using Example & Code Generation Agent (ECGA) in `my-book/docs/chapter15.md`
- [ ] T047 [US1] [P] Generate and embed diagrams for Chapter 1 using Diagram & Visualization Agent (DVA) in `my-book/docs/chapter1.md`
- ... (repeat for all 15 chapters)
- [ ] T061 [US1] [P] Generate and embed diagrams for Chapter 15 using Diagram & Visualization Agent (DVA) in `my-book/docs/chapter15.md`
- [ ] T062 [US1] [P] Create exercises, quizzes, and lab tasks for Chapter 1 using Assessment & Lab Task Agent (ALTA) in `my-book/docs/chapter1.md`
- ... (repeat for all 15 chapters)
- [ ] T076 [US1] [P] Create exercises, quizzes, and lab tasks for Chapter 15 using Assessment & Lab Task Agent (ALTA) in `my-book/docs/chapter15.md`
- [ ] T077 [US1] Perform human review and refinement of Chapter 1 content (SME/Editor-driven)
- ... (repeat for all 15 chapters)
- [ ] T091 [US1] Perform human review and refinement of Chapter 15 content (SME/Editor-driven)
- [ ] T092 [US1] Run Quality Assurance & Review Agent (QARA) for Chapter 1 content
- ... (repeat for all 15 chapters)
- [ ] T106 [US1] Run Quality Assurance & Review Agent (QARA) for Chapter 15 content
- [ ] T107 [P] [US1] Configure Docusaurus `sidebars.js` for chapter navigation in `my-book/sidebars.js`


**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - RAG Chatbot (Priority: P1) 🎯 MVP

**Goal**: A learner highlights text inside the book and asks the embedded chatbot questions.

**Independent Test**: The chatbot UI is visible, accepts input, and provides relevant answers based on book content.


### Tests for User Story 2

- [ ] T108 [P] [US2] Unit test RAG chatbot frontend component in `my-book/src/components/Chatbot.tsx`
- [ ] T109 [P] [US2] Unit test FastAPI chatbot endpoint in `my-book/api/routes/chatbot.py`
- [ ] T110 [US2] Integration test for RAG pipeline (embedding, vector search, response generation) in `my-book/tests/backend/rag_integration.py`

### Implementation for User Story 2

- [ ] T111 [US2] Create Docusaurus chatbot UI component in `my-book/src/components/Chatbot.tsx`
- [ ] T112 [US2] Integrate chatbot UI into Docusaurus layout (e.g., `my-book/src/theme/Layout.tsx`)
- [ ] T113 [US2] Implement FastAPI endpoint for chatbot queries in `my-book/api/routes/chatbot.py`
- [ ] T114 [US2] Integrate Qdrant vector search into chatbot service in `my-book/rag/chatbot_service.py`
- [ ] T115 [US2] Implement text highlighting and context extraction for chatbot input in `my-book/src/utils/text_selection.ts`
- [ ] T116 [US2] Develop initial prompt engineering for RAG responses in `my-book/rag/prompt_templates.py`
- [ ] T117 [US2] Implement content ingestion process to generate embeddings and upload to Qdrant in `my-book/rag/ingestion.py`

**Checkpoint**: User Story 2 should be fully functional and testable independently

---

## Phase 5: User Story 3 - Personalization Engine (Priority: P2)

**Goal**: A user clicks “Personalize this chapter” to receive content based on their background level.

**Independent Test**: Clicking the personalization button alters chapter content based on a predefined user profile.

### Tests for User Story 3

- [ ] T118 [P] [US3] Unit test personalization UI button in `my-book/src/components/PersonalizationButton.tsx`
- [ ] T119 [P] [US3] Unit test FastAPI personalization endpoint in `my-book/api/routes/personalization.py`
- [ ] T120 [US3] Integration test for personalization logic (profile fetch, content modification) in `my-book/tests/backend/personalization_integration.py`

### Implementation for User Story 3

- [ ] T121 [US3] Create Docusaurus UI button for personalization in `my-book/src/components/PersonalizationButton.tsx`
- [ ] T122 [US3] Implement FastAPI endpoint for personalization requests in `my-book/api/routes/personalization.py`
- [ ] T123 [US3] Develop personalization logic (e.g., adjust difficulty, examples) using AI agents in `my-book/personalization/engine.py`
- [ ] T124 [US3] Integrate user profile data from Neon Postgres for personalization in `my-book/personalization/profile_adapter.py`
- [ ] T125 [US3] Implement content re-rendering based on personalization output in Docusaurus `my-book/src/theme/DocItem/Content/index.tsx`

**Checkpoint**: User Story 3 should be fully functional and testable independently

---

## Phase 6: User Story 4 - Urdu Translation Module (Priority: P2)

**Goal**: A reader presses “Translate to Urdu” to view the same chapter in Urdu.

**Independent Test**: The chapter content is displayed in readable Urdu after clicking the translation button.

### Tests for User Story 4

- [ ] T126 [P] [US4] Unit test Urdu translation UI button in `my-book/src/components/UrduTranslationButton.tsx`
- [ ] T127 [P] [US4] Unit test FastAPI translation endpoint in `my-book/api/routes/translation.py`
- [ ] T128 [US4] Integration test for translation agent (input, translation, output) in `my-book/tests/backend/translation_integration.py`

### Implementation for User Story 4

- [ ] T129 [US4] Create Docusaurus UI button for Urdu translation in `my-book/src/components/UrduTranslationButton.tsx`
- [ ] T130 [US4] Implement FastAPI endpoint for Urdu translation requests in `my-book/api/routes/translation.py`
- [ ] T131 [US4] Develop Urdu translation logic using an AI agent in `my-book/translation/engine.py`
- [ ] T132 [US4] Implement content re-rendering for translated text in Docusaurus `my-book/src/theme/DocItem/Content/index.tsx`

**Checkpoint**: User Story 4 should be fully functional and testable independently

---

## Phase 7: User Story 5 - Authentication (Priority: P3)

**Goal**: A user logs in using Better-Auth and their background data influences content adjustments.

**Independent Test**: Users can successfully sign up and log in via Better-Auth; their provided background data is stored.

### Tests for User Story 5

- [ ] T133 [P] [US5] Unit test Better-Auth signup/signin UI components in `my-book/src/components/AuthComponents.tsx`
- [ ] T134 [P] [US5] Unit test Better-Auth backend integration in `my-book/api/auth/service.py`
- [ ] T135 [US5] Integration test for full authentication flow and profile storage in `my-book/tests/backend/auth_flow.py`

### Implementation for User Story 5

- [ ] T136 [US5] Create Docusaurus UI for signup/signin forms in `my-book/src/components/AuthComponents.tsx`
- [ ] T137 [US5] Integrate Better-Auth SDK/client into Docusaurus frontend `my-book/src/utils/auth.ts`
- [ ] T138 [US5] Implement FastAPI endpoints for Better-Auth callbacks and user session management in `my-book/api/auth/routes.py`
- [ ] T139 [US5] Store user background data (software/hardware/education experience) in Neon Postgres via `my-book/api/models/user.py`
- [ ] T140 [US5] Link authenticated user profiles to personalization engine in `my-book/personalization/profile_adapter.py`

**Checkpoint**: User Story 5 should be fully functional and testable independently

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories, deployment, and overall quality.

- [ ] T141 [P] Implement Docusaurus theme customization (branding, colors) in `my-book/src/css/custom.css`
- [ ] T142 [P] Configure GitHub Pages deployment for Docusaurus frontend in `my-book/.github/workflows/deploy.yml`
- [ ] T143 [P] Configure backend deployment (e.g., Render, Fly.io) for FastAPI in `my-book/api/Dockerfile`
- [ ] T144 [P] Integrate Claude Subagents (Chapter Summarizer, Quiz Generator, Robotics Code Generator) into chatbot/personalization workflows in `my-book/rag/subagents.py`
- [ ] T145 Code cleanup and refactoring across frontend and backend
- [ ] T146 Performance optimization for chatbot and personalization responses
- [ ] T147 Security hardening for FastAPI backend and authentication
- [ ] T148 Run all unit and integration tests
- [ ] T149 Run end-to-end tests for critical user journeys (if applicable)
- [ ] T059 Run end-to-end tests for critical user journeys (if applicable)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories
- **User Story 2 (P1)**: Integrates with US1 (book content) but should be independently testable
- **User Story 3 (P2)**: Depends on US5 (Authentication) for user profiles, integrates with US1 (book content)
- **User Story 4 (P2)**: Integrates with US1 (book content) but should be independently testable
- **User Story 5 (P3)**: Foundational for US3 (Personalization), provides user profiles

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, User Stories 1, 2, and 4 can start in parallel
- User Story 3 depends on User Story 5, so US5 must be prioritized before US3.
- All tests for a user story marked [P] can run in parallel
- Components within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members (respecting dependencies)

---

## Parallel Example: User Story 1 (Student Reads)

```bash
# Launch all tests for User Story 1 together:
Task: "Unit test Docusaurus components in my-book/src/components/"
Task: "Integration test for basic Docusaurus routing/rendering in my-book/tests/frontend/"

# Launch parallel content creation for User Story 1:
Task: "Add sample content with diagrams, code snippets, exercises to my-book/docs/chapter1.md"
Task: "Configure Docusaurus sidebars.js for chapter navigation in my-book/sidebars.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 & 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Core content viewing)
4. Complete Phase 4: User Story 2 (RAG Chatbot)
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 5 (Authentication, as it's a prerequisite for US3) → Test independently → Deploy/Demo
5. Add User Story 3 (Personalization) → Test independently → Deploy/Demo
6. Add User Story 4 (Urdu Translation) → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Core content)
   - Developer B: User Story 2 (RAG Chatbot)
   - Developer C: User Story 5 (Authentication) -> then User Story 3 (Personalization)
   - Developer D: User Story 4 (Urdu Translation)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
