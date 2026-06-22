import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartData } from 'chart.js';
import { useTaskStore } from '../store/taskStore';

// Concept: Registering ChartJS components
// We must register the parts of the chart we want to use.
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * TaskStats Component
 * Visualizes the ratio of completed vs pending tasks.
 */
export const TaskStats = () => {
  const { tasks } = useTaskStore();

  // Step 1: Calculate the data points from local tasks
  const completed = tasks.filter(t => t.status === 'Done').length;
  const pending = tasks.length - completed;

  // Step 2: Prepare the data object for Chart.js
  const data: ChartData<'pie'> = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Tasks',
        data: [completed, pending],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)', // Primary brand color (indigo)
          'rgba(244, 63, 94, 0.8)',  // Accent color (red-pink)
        ],
        borderColor: [
          '#6366f1',
          '#f43f5e',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'inherit',
          font: { family: "'Inter', sans-serif", weight: '600' as const }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
      }
    }
  };

  // Step 3: Handle empty state
  if (tasks.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>
        <p>No tasks created yet to generate analytics...</p>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1rem' }}>Task Analytics</h3>
      <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
        <Pie data={data} options={options} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'around', marginTop: '1.5rem', fontSize: '0.8rem', textAlign: 'center', opacity: 0.8 }}>
        <div style={{ flex: 1 }}>
          <strong>{completed}</strong>
          <div>Completed</div>
        </div>
        <div style={{ flex: 1 }}>
            <strong>{tasks.length}</strong>
            <div>Total</div>
        </div>
        <div style={{ flex: 1 }}>
          <strong>{pending}</strong>
          <div>Pending</div>
        </div>
      </div>
    </div>
  );
};
