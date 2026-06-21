import type { Task } from '../types/task';

// Concept: Environment Variables
// Vite uses import.meta.env to access variables prefixed with VITE_
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Concept: Async/Await & Error Handling
 * 
 * async/await makes asynchronous code look synchronous.
 * try/catch allows us to gracefully handle network failures or API errors.
 */
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos?_limit=10`);

    // Guard clause: fetch doesn't throw on 404/500, so we check response.ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    // Re-throw so TanStack Query can catch it and trigger its own error state
    throw error;
  }
};

export const fetchTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`);
    if (!response.ok) {
        throw new Error(`Task with id ${id} not found`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching task ${id}:`, error);
    throw error;
  }
};
