# Pro Task Manager (React + TypeScript + Vite)

A modern, high-performance task management application built as a comprehensive learning journey from basic React to production-grade patterns.

## Performance-Oriented Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite (Ultra-fast build tool)
- **Routing**: React Router 7 (Single Page Navigation)
- **State Management**: Zustand (Primary), Redux Toolkit (Secondary)
- **Data Fetching**: TanStack Query v5 (Server State & Caching)
- **Forms & Validation**: React Hook Form + Zod
- **Analytics**: Chart.js (Data Visualization)
- **Persistence**: Zustand Persist (localStorage Sync)
- **Backend Architecture**: Express.js (Modular/Service-based Pattern)
- **Styles**: Tailwind CSS v4 (Utility-first with Glassmorphism)
- **Auth**: Secure JWT + HttpOnly Cookies (XSS-Proof)

---

## The 35-Step Learning Roadmap

### Phase 1: Foundations & Architecture
**Step 1: Clean Project Structure**
- *Goal*: Remove boilerplate and organize folders.
- *Why*: Makes the codebase scalable and follows industry "Separation of Concerns."

**Step 2: Create Page Components**
- *Goal*: Build initial views (Home, Tasks, TaskDetail, Settings).
- *Why*: Pre-defining views before implementing navigation logic.

**Step 3: Install React Router**
- *Goal*: Add `react-router-dom`.
- *Why*: Enables Single Page Application (SPA) behavior where the page updates without refreshing the browser.

**Step 4: Setup App Routes**
- *Goal*: Configure the route table.
- *Why*: Maps specific URLs (e.g., `/tasks`) to their respective components.

**Step 5: Create Global Navbar**
- *Goal*: Implement a persistent navigation bar.
- *Why*: Provides consistent user experience across all routes.

---

### Phase 2: React Hooks & Logic
**Step 6: useState (The Heart of React)**
- *Goal*: Manage local task and input states.
- *Why*: Allows the UI to react instantly to user input.

**Step 7: Task Logic (CRUD Foundations)**
- *Goal*: Implement adding and listing logic.
- *Why*: Teaches immutable state updates (using `...` spread operator).

**Step 8: useEffect (Life Cycle Management)**
- *Goal*: Handle component mounting and side effects.
- *Why*: Used for API calls, subscriptions, or initial page logging.

**Step 9: Dynamic Routing (useParams)**
- *Goal*: Create parameterized routes like `/tasks/:id`.
- *Why*: Allows a single "Detail" component to render unique content based on the URL.

---

### Phase 3: Global State Management
**Step 10: Context API (The Prop-Drilling Killer)**
- *Goal*: Implement `ThemeContext`.
- *Why*: Avoids passing "Theme" props through every single child component.

**Step 11: Dark Mode Implementation**
- *Goal*: Build a global theme toggle.
- *Why*: Demonstrates real-world usage of global context to influence styling.

**Step 12: Redux Toolkit (The Industry Standard)**
- *Goal*: Centralize task management in a Redux Store.
- *Why*: Scales better for large teams and complex state logic.

**Step 13: Zustand (The Modern Alternative)**
- *Goal*: Implement a lightweight store using Zustand.
- *Why*: Offers much less boilerplate than Redux while maintaining global accessibility.

---

### Phase 4: Reliability & Optimization
**Step 14: Error Boundary**
- *Goal*: Implement a class-based error catcher.
- *Why*: Prevents the entire app from crashing if a small part of the UI fails.

**Step 15: React.memo (Render Optimization)**
- *Goal*: Memoize the `TaskCard` component.
- *Why*: Saves CPU by skipping re-renders of components whose props haven't changed.

**Step 16: useMemo (Calculation Caching)**
- *Goal*: Cache filtered search results.
- *Why*: Prevents expensive filtering logic from running on every keystroke if the list hasn't changed.

**Step 17: useCallback (Reference Stability)**
- *Goal*: Wrap event handlers passed to memoized children.
- *Why*: Without this, `TaskCard` would re-render because functions are re-created every time.

---

### Phase 5: Production Quality & Inspection
**Step 18: Chrome DevTools**
- *Goal*: Master the Console, Network, and Performance tabs.
- *Why*: Critical for identifying slow logic or failed network requests.

**Step 19: React Developer Tools**
- *Goal*: Inspect high-level hooks, state, and props tree.
- *Why*: Visualizes how data flows through your React components.

**Step 20: Lighthouse Audit**
- *Goal*: Audit for SEO, Accessibility, and Performance.
- *Why*: Ensures the final product is professional, fast, and accessible to everyone.

---

### Phase 6: Advanced API Consumption
**Step 21: Environment Variables (.env)**
- *Goal*: Externalize API URLs and configuration.
- *Why*: Keeps sensitive settings out of source code and allows multiple environments (Dev/Prod).

**Step 22: Async/Await Service Layer**
- *Goal*: Implement clean data fetching with `try/catch`.
- *Why*: Makes asynchronous code readable and provides robust error handling.

**Step 23: TanStack Query (Server State)**
- *Goal*: Implement `useQuery` for fetching and caching.
- *Why*: Eliminates boilerplate for loading/error states and adds intelligent data synchronization.

**Step 24: Loading & Error Patterns**
- *Goal*: Implement spinners and user-friendly error messages.
- *Why*: Improves UX by keeping the user informed of the app's current network state.

**Step 25: React Query DevTools**
- *Goal*: Inspect network cache and stale data.
- *Why*: Powerful tool for debugging complex data flows and cache invalidation.

---

### Phase 7: Advanced Forms & Validation
**Step 26: React Hook Form**
- *Goal*: Eliminate manual state management for every input.
- *Why*: Improves performance by reducing re-renders and simplifies code structure.

**Step 27: Zod Schema Validation**
- *Goal*: Define data rules in a single, reusable schema.
- *Why*: Ensures data integrity and provides instant, type-safe error feedback to the user.

**Step 28: Complex Field Handling**
- *Goal*: Implement multi-field forms (Priority, Description) with validation.
- *Why*: Demonstrates real-world form complexity beyond simple text inputs.

---

### Phase 8: Data Analytics & Persistence
**Step 29: Data Visualization (Chart.js)**
- *Goal*: Render a Pie Chart of task statistics.
- *Why*: Provides at-a-glance context on productivity that raw numbers cannot convey.

**Step 30: Zustand Persistence**
- *Goal*: Sync the application state with `localStorage`.
- *Why*: Prevents data loss on page refresh, making the app feel like a real production tool.

---

### Phase 9: Industrial Backend & Security
**Step 31: Modular Express Architecture**
- *Goal*: Separate logic into Controllers, Services, and Routes.
- *Why*: Mirrors company-level project structures used at Google, Netflix, etc.

**Step 32: Secure JWT (HttpOnly Cookies)**
- *Goal*: Store session tokens in a browser-locked cookie vault.
- *Why*: Protects users from XSS attacks that could steal their identity.

**Step 33: Auth Middleware & Protected Routes**
- *Goal*: Block unauthenticated users from seeing sensitive data.
- *Why*: Ensures that only verified "Active ID Cards" can open the Dashboard.

---

### Phase 10: Scalable UI & Modern CSS
**Step 34: Migration to Tailwind CSS v4**
- *Goal*: Refactor custom CSS into utility-first classes.
- *Why*: Faster development speed and guaranteed design consistency.

**Step 35: App/Server Split Pattern**
- *Goal*: Separate the App logic (`app.js`) from the network startup (`server.js`).
- *Why*: Critical for enterprise testing and high-availability deployments.

---

### Phase 11: Real-World Data Privacy & Hashing
**Step 36: Bcrypt Password Encryption**
- *Goal*: Never store raw passwords. Use salt-based hashing.
- *Why*: Even if the server is hacked, user passwords remain unreadable and safe.

**Step 37: Multi-User Task Isolation**
- *Goal*: Ensure User A can never see or modify User B's tasks.
- *Why*: Privacy is a non-negotiable requirement for any professional production app.

**Step 38: Model Abstraction Pattern**
- *Goal*: Separate the data storage (Models) from the behavior (Controllers).
- *Why*: Allows the app to switch from in-memory arrays to MongoDB/PostgreSQL effortlessly.

---

### Phase 12: Developer Experience & Organization
**Step 39: Path Aliasing (@/)**
- *Goal*: Replace messy relative imports (e.g., `../../../`) with a clean `@/` prefix.
- *Why*: Improves code readability and makes refactoring (moving files) painless.

**Step 40: Unified Environment Hub**
- *Goal*: Consolidate Frontend and Backend configuration into a single root `.env` file.
- *Why*: Provides a single "Source of Truth" for the entire project, simplifying deployment and local setup.

## 🔄 The Secure Authentication Workflow

Below is the complete architectural loop of how a user's identity is verified from the login click to the final dashboard render.

```mermaid
sequenceDiagram
    participant User as "User (UI)"
    participant React as "React (Frontend)"
    participant Express as "Express (Backend)"
    participant JWT as "JWT Authority"

    User->>React: Enters Email/Password
    React->>Express: POST /api/login
    Express->>JWT: Sign Payload (Secret Key)
    JWT-->>Express: Signed Token (ID Card)
    Express-->>React: Set-Cookie: auth_token (HttpOnly)
    Note right of React: JavaScript cannot see this cookie!

    User->>React: Clicks "Tasks Dashboard"
    React->>Express: GET /api/me (Cookies auto-sent by browser)
    Express->>JWT: Verify "Wax Seal" on Token
    JWT-->>Express: Success (User is valid)
    Express-->>React: 200 OK (User Data)
    React-->>User: Renders Tasks & Protected Content
```

## 🏗️ Application Execution Flow

This chart traces exactly what happens when you run `npm run dev` and how the application data flows from the server to your screen.

```mermaid
graph TD
    A["🚀 USER: npm run dev"] --> B{"Entry Point"}
    B -->|index.html| C["React Init (main.tsx)"]
    C --> D["Context Providers (Auth, Theme, Query)"]
    D --> E["AppRoutes.tsx"]
    
    E --> F{"Route Type?"}
    F -->|Public: /| G["Home.tsx"]
    F -->|Public: /login| H["Login.tsx"]
    
    F -->|Protected: /tasks| I["ProtectedRoute.tsx"]
    I --> J{"Cookie Valid?"}
    J -->|No| H
    J -->|Yes| K["Tasks.tsx Dashboard"]
    
    K --> L["TanStack Query (fetchTasksAPI)"]
    L --> M["axios (jsonplaceholder API)"]
    K --> O["useTaskStore (fetchTasks)"]
    O --> P["Express (/api/tasks)"]
    P --> Q["taskController (Filter by UserEmail)"]
    Q --> N["UI Render (Private Task Dashboard)"]
```


## Getting Started

1. **Clone and Install**
   ```bash
   npm install
   cd server && npm install
   ```

2. **Configure Environment**
   Create a `.env` file in the **root** (not in the server folder) and add:
   ```env
   # Frontend
   VITE_API_BASE_URL=http://localhost:5000

   # Backend
   PORT=5000
   JWT_SECRET=your_super_secret_key
   ```

3. **Run the Application**
   Open two terminals:
   ```bash
   # Terminal 1: Frontend
   npm run dev

   # Terminal 2: Backend
   cd server
   npm run dev
   ```
