import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  status: 'To Do' | 'Done';
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title) => set((state) => ({ 
    tasks: [...state.tasks, { id: Date.now().toString(), title, status: 'To Do' }] 
  })),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter((t) => t.id !== id)
  })),
  toggleTaskStatus: (id) => set((state) => ({
    tasks: state.tasks.map((t) => 
      t.id === id ? { ...t, status: t.status === 'To Do' ? 'Done' : 'To Do' } : t
    )
  })),
}));
