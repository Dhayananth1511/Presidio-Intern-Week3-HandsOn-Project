import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartData } from 'chart.js';
import { useTaskStore } from '../store/taskStore';

ChartJS.register(ArcElement, Tooltip, Legend);

export const TaskStats = () => {
  const { tasks } = useTaskStore();

  const completed = tasks.filter(t => t.status === 'Done').length;
  const pending = tasks.length - completed;

  const data: ChartData<'pie'> = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Tasks',
        data: [completed, pending],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(244, 63, 94, 0.8)',
        ],
        borderColor: [
          'transparent',
          'transparent',
        ],
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { weight: 'bold' as any, size: 12 }
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: { size: 14, weight: 'bold' as any },
        bodyFont: { size: 13 },
        padding: 12,
        cornerRadius: 12,
        displayColors: false,
      }
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center opacity-60 italic">
        <p>Awaiting task data for analytics...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="h-64 relative mb-6">
        <Pie data={data} options={options} />
      </div>
      <div className="flex justify-around items-center pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="text-center group">
          <div className="text-xl font-black text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">{completed}</div>
          <div className="text-[10px] font-bold uppercase tracking-tight opacity-50">Done</div>
        </div>
        <div className="text-center group">
          <div className="text-xl font-black text-slate-900 dark:text-white group-hover:scale-110 transition-transform">{tasks.length}</div>
          <div className="text-[10px] font-bold uppercase tracking-tight opacity-50">Total</div>
        </div>
        <div className="text-center group">
          <div className="text-xl font-black text-red-500 group-hover:scale-110 transition-transform">{pending}</div>
          <div className="text-[10px] font-bold uppercase tracking-tight opacity-50">Pending</div>
        </div>
      </div>
    </div>
  );
};
