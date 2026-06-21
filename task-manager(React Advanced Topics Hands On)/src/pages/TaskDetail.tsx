import { useParams, Link } from "react-router-dom";
import { useTaskStore } from "../store/taskStore";

function TaskDetail() {
  const { id } = useParams();
  const { tasks, toggleTaskStatus } = useTaskStore();
  
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h1>Task Not Found</h1>
        <Link to="/tasks"><button>Back to Tasks</button></Link>
      </div>
    );
  }

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/tasks" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>← Back</Link>
        <span style={{ 
          fontSize: '0.9rem', 
          backgroundColor: task.status === 'Done' ? '#22c55e' : '#64748b',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '999px',
        }}>
          {task.status}
        </span>
      </div>

      <h1 style={{ marginBottom: '1rem' }}>{task.title}</h1>
      
      <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
        ID: <code style={{ background: 'rgba(0,0,0,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{task.id}</code>
      </p>

      <div className="glass-card" style={{ background: 'rgba(99, 102, 241, 0.05)', borderStyle: 'dotted' }}>
        <h3>Actions</h3>
        <p>Would you like to change the status of this task?</p>
        <button 
          onClick={() => toggleTaskStatus(task.id)}
          style={{ 
            backgroundColor: task.status === 'Done' ? '#64748b' : '#22c55e',
            width: '100%' 
          }}
        >
          Mark as {task.status === 'Done' ? 'To Do' : 'Done'}
        </button>
      </div>
    </div>
  );
}

export default TaskDetail;
