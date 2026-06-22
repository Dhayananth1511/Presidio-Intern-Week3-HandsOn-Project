import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTaskStore } from "../store/taskStore";
import { fetchTasks } from "../services/api";
import TaskCard from "../components/TaskCard";
import { TaskStats } from "../components/TaskStats";
import { AddTaskForm } from "../components/AddTaskForm";

function Tasks() {
  const { tasks, deleteTask } = useTaskStore();
  
  const [search, setSearch] = useState("");

  // Concept: TanStack Query (useQuery)
  const { 
    data: apiTasks, 
    isLoading, 
    isError, 
    error,
    refetch 
  } = useQuery({
    queryKey: ['tasks-api'],
    queryFn: fetchTasks,
  });

  const handleDeleteTask = useCallback((id: string) => {
    deleteTask(id);
  }, [deleteTask]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => 
      t.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return (
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <h1>Dashboard</h1>

      {/* Analytics Section */}
      <section style={{ marginBottom: '3rem' }}>
        <TaskStats />
      </section>
      
      {/* Local State Tasks Section */}
      <section aria-labelledby="local-tasks-title">
        <h2 id="local-tasks-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Local Tasks (Zustand)</h2>
        
        <AddTaskForm />

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="search-input">Search Tasks</label>
          <input
            id="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Narrow down your tasks..."
            aria-label="Search through your local tasks"
            style={{ 
              fontSize: '0.9rem', 
              background: 'rgba(0,0,0,0.03)',
              borderStyle: 'dashed'
            }}
          />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', opacity: 0.6, fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Your Local Tasks ({filteredTasks.length})
          </h3>
          <div className="task-grid" role="list">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((item) => (
                <div role="listitem" key={item.id}>
                  <TaskCard 
                    task={item} 
                    onDelete={handleDeleteTask} 
                  />
                </div>
              ))
            ) : (
              <p style={{ opacity: 0.5, textAlign: 'center', padding: '2rem', gridColumn: '1 / -1' }}>No local tasks found...</p>
            )}
          </div>
        </div>
      </section>

      <hr style={{ margin: '3rem 0', opacity: 0.1 }} aria-hidden="true" />

      {/* API Consumption Hands-On Section */}
      <section aria-labelledby="api-tasks-title">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 id="api-tasks-title" style={{ fontSize: '1.2rem' }}>API Data (TanStack Query)</h2>
          <button 
            onClick={() => refetch()} 
            style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            disabled={isLoading}
            aria-label="Refetch tasks from external API"
          >
            {isLoading ? 'Refetching...' : 'Refresh API Data'}
          </button>
        </div>

        {/* Concept: Handling Loading State */}
        {isLoading && (
          <div role="status" aria-busy="true" style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner"></div>
            <p>Fetching tasks from JSONPlaceholder...</p>
          </div>
        )}

        {/* Concept: Handling Error State */}
        {isError && (
          <div role="alert" style={{ 
            padding: '1.5rem', 
            background: 'rgba(255,0,0,0.05)', 
            border: '1px solid rgba(255,0,0,0.1)',
            borderRadius: '12px',
            color: '#d32f2f'
          }}>
            <strong>Error:</strong> {(error as Error).message}
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Check if your VITE_API_BASE_URL in .env is correct.
            </p>
          </div>
        )}

        {/* Displaying API Data in a responsive grid */}
        {apiTasks && (
          <div className="task-grid" role="list" style={{ opacity: isLoading ? 0.5 : 1 }}>
            {apiTasks.map((task) => (
              <div key={task.id} role="listitem" className="glass-card api-task-item" style={{ 
                padding: '1.25rem', 
                background: 'rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderWidth: '1px'
              }}>
                <span 
                  aria-hidden="true"
                  style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    flexShrink: 0,
                    background: task.completed ? '#4caf50' : '#ffa726'
                  }}
                ></span>
                <span style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none', 
                  opacity: task.completed ? 0.5 : 1,
                  fontSize: '0.95rem'
                }}>
                  {task.title}
                  <span className="sr-only"> - status: {task.completed ? 'completed' : 'pending'}</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Tasks;
