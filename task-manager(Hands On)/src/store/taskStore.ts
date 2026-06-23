import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'Done';
}

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  
  // Real API Actions
  fetchTasks: () => Promise<void>;
  addTask: (data: Omit<Task, 'id' | 'status'>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTaskStatus: (id: string) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  loading: false,

  fetchTasks: async () => {
    set({ loading: true });
    try {
      const res = await fetch('/api/tasks');
      if (res.ok) {
        const data = await res.json();
        set({ tasks: data });
      }
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      set({ loading: false });
    }
  },

  addTask: async (data) => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const newTask = await res.json();
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      }
    } catch (err) {
      console.error("Failed to add task", err);
    }
  },

  deleteTask: async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
      }
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  },

  toggleTaskStatus: async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'PATCH' });
      if (res.ok) {
        const updatedTask = await res.json();
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === id ? updatedTask : t))
        }));
      }
    } catch (err) {
      console.error("Failed to toggle task", err);
    }
  },
}));
