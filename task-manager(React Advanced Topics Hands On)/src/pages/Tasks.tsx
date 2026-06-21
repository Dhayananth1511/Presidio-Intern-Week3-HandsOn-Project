import { useState, useMemo, useCallback } from "react";
import { useTaskStore } from "../store/taskStore";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks, addTask, deleteTask } = useTaskStore();
  
  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");

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
        <h3 style={{ marginBottom: '1rem', opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Your Tasks ({filteredTasks.length})
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
            <p style={{ opacity: 0.5, textAlign: 'center', padding: '2rem' }}>No tasks found...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
