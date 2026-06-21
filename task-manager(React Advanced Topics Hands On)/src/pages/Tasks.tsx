import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTaskStore } from "../store/taskStore";
import { fetchTasks } from "../services/api";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks, addTask, deleteTask } = useTaskStore();
  
  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");

  // Concept: TanStack Query (useQuery)
  // This hook handles the complete lifecycle: loading, error, and data.
  // 'tasks-api' is the unique query key for caching.
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

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

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
      
      {/* Local State Tasks Section */}
      <section>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Local Tasks (Zustand)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '2rem' }}>
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="What needs to be done?"
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            style={{ marginBottom: 0 }}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search your tasks..."
            style={{ 
              fontSize: '0.9rem', 
              background: 'rgba(0,0,0,0.03)',
              borderStyle: 'dashed'
            }}
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', opacity: 0.6, fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Your Local Tasks ({filteredTasks.length})
          </h3>
          <ul>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((item) => (
                <TaskCard 
                  key={item.id} 
                  task={item} 
                  onDelete={handleDeleteTask} 
                />
              ))
            ) : (
              <p style={{ opacity: 0.5, textAlign: 'center', padding: '2rem' }}>No local tasks found...</p>
            )}
          </ul>
        </div>
      </section>

      <hr style={{ margin: '3rem 0', opacity: 0.1 }} />

      {/* API Consumption Hands-On Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.2rem' }}>API Data (TanStack Query)</h2>
          <button 
            onClick={() => refetch()} 
            style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            disabled={isLoading}
          >
            {isLoading ? 'Refetching...' : 'Refresh API Data'}
          </button>
        </div>

        {/* Concept: Handling Loading State */}
        {isLoading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner"></div>
            <p>Fetching tasks from JSONPlaceholder...</p>
          </div>
        )}

        {/* Concept: Handling Error State */}
        {isError && (
          <div style={{ 
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

        {/* Displaying API Data */}
        {apiTasks && (
          <ul style={{ opacity: isLoading ? 0.5 : 1 }}>
            {apiTasks.map((task) => (
              <li key={task.id} style={{ 
                padding: '1rem', 
                marginBottom: '0.5rem', 
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: task.completed ? '#4caf50' : '#ffa726'
                }}></span>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.5 : 1 }}>
                  {task.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Tasks;
