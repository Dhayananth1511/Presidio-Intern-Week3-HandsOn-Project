import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTaskStore } from '../store/taskStore';

// Concept: Zod Schema Definition
// This is the source of truth for your data rules.
const taskSchema = z.object({
  title: z.string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title is too long"),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .or(z.literal('')), // Allow empty string if user doesn't want description
  priority: z.enum(['Low', 'Medium', 'High'])
});

// Infer the TypeScript type automatically from the schema!
type TaskFormData = z.infer<typeof taskSchema>;

export const AddTaskForm = () => {
  const { addTask } = useTaskStore();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema), // Connect Zod to React Hook Form
    defaultValues: {
      priority: 'Medium',
      description: ''
    }
  });

  const onSubmit = (data: TaskFormData) => {
    addTask(data.title, data.description, data.priority);
    reset(); // Clear the form after success
  };

  return (
    <div className="glass-card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Create New Task</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="responsive-form" style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label htmlFor="title">Task Title</label>
          <input
            id="title"
            {...register("title")}
            placeholder="What are you working on?"
            style={{ marginBottom: '0.25rem', borderColor: errors.title ? '#f43f5e' : undefined }}
          />
          {errors.title && <span style={{ color: '#f43f5e', fontSize: '0.75rem' }}>{errors.title.message}</span>}
        </div>

        <div>
          <label htmlFor="description">Description (Optional)</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Add some details..."
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '12px', 
              border: errors.description ? '1px solid #f43f5e' : '1px solid #cbd5e1',
              minHeight: '80px',
              fontFamily: 'inherit'
            }}
          />
          {errors.description && <span style={{ color: '#f43f5e', fontSize: '0.75rem' }}>{errors.description.message}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              {...register("priority")}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '12px', 
                border: '1px solid #cbd5e1',
                background: 'white'
              }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button type="submit" style={{ height: '48px' }} aria-label="Submit new task">
            Add to List
          </button>
        </div>
      </form>
    </div>
  );
};
