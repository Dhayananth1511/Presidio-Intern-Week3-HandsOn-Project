import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import TaskDetail from "../pages/TaskDetail";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<TaskDetail />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
