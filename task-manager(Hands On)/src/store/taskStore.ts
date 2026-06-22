import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'Done';
}

interface TaskStore {
  tasks: Task[];
  addTask: (data: Omit<Task, 'id'>) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
}

// Concept: Zustand Persistence
// This middleware automatically syncs the 'tasks' state with localStorage.
export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (data) => set((state) => ({ 
        tasks: [...state.tasks, { 
          ...data,
          id: Date.now().toString() 
        }] 
      })),
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id)
      })),
      toggleTaskStatus: (id) => set((state) => ({
        tasks: state.tasks.map((t) => 
          t.id === id ? { ...t, status: t.status === 'To Do' ? 'Done' : 'To Do' } : t
        )
      })),
    }),
    {
      name: 'task-storage', // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
