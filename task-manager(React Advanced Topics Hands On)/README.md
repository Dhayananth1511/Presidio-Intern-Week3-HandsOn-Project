# Pro Task Manager (React + TypeScript + Vite)

A modern, high-performance task management application built as a comprehensive learning journey from basic React to production-grade patterns.

## Performance-Oriented Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite (Ultra-fast build tool)
- **Routing**: React Router 7 (Single Page Navigation)
- **State Management**: Zustand (Primary) & Redux Toolkit (Secondary)
- **UI Architecture**: Glassmorphism + CSS Variable Design System

---

## The 20-Step Learning Roadmap

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


## Getting Started
```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```
