import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import TaskDetail from "../pages/TaskDetail";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route path="/tasks" element={
        <ProtectedRoute>
          <Tasks />
        </ProtectedRoute>
      } />
      <Route path="/tasks/:id" element={
        <ProtectedRoute>
          <TaskDetail />
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;
