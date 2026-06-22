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

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <h1 style={{ margin: 0 }}>{task.title}</h1>
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: 800,
          padding: '4px 10px',
          borderRadius: '6px',
          textTransform: 'uppercase',
          backgroundColor: task.priority === 'High' ? '#fee2e2' : task.priority === 'Medium' ? '#fef3c7' : '#f0fdf4',
          color: task.priority === 'High' ? '#991b1b' : task.priority === 'Medium' ? '#92400e' : '#166534',
        }}>
          {task.priority} Priority
        </span>
      </div>

      {task.description && (
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase' }}>Description</h4>
          <p style={{ margin: 0, lineHeight: 1.6, fontSize: '1.1rem' }}>{task.description}</p>
        </div>
      )}
      
      <p style={{ opacity: 0.5, marginBottom: '2rem', fontSize: '0.8rem' }}>
        Reference ID: <code style={{ background: 'rgba(0,0,0,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{task.id}</code>
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
