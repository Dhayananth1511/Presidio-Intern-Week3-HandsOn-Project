import React from 'react';
import { Link } from 'react-router-dom';
import type { Task } from '../store/taskStore';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskCard = React.memo(({ task, onDelete }: TaskCardProps) => {
  return (
    <li className="glass-card" style={{ marginBottom: '0.5rem', borderRadius: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>{task.title}</span>
          <span style={{ 
            fontSize: '0.65rem', 
            fontWeight: 800,
            padding: '2px 6px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            backgroundColor: task.priority === 'High' ? '#fee2e2' : task.priority === 'Medium' ? '#fef3c7' : '#f0fdf4',
            color: task.priority === 'High' ? '#991b1b' : task.priority === 'Medium' ? '#92400e' : '#166534',
          }}>
            {task.priority}
          </span>
        </div>
        
        {task.description && (
          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.4 }}>
            {task.description}
          </p>
        )}

        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: 600,
          backgroundColor: task.status === 'Done' ? '#22c55e' : '#64748b',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '999px',
          width: 'fit-content',
          marginTop: '0.25rem'
        }}>
          {task.status}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Link to={`/tasks/${task.id}`}>
          <button style={{ 
            backgroundColor: 'transparent', 
            border: '1px solid var(--primary)', 
            color: 'var(--primary)',
            padding: '0.4rem 1rem'
          }}>
            View
          </button>
        </Link>
        <button 
          onClick={() => onDelete(task.id)} 
          style={{ 
            backgroundColor: '#ef4444', 
            padding: '0.4rem 1rem' 
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default TaskCard;
