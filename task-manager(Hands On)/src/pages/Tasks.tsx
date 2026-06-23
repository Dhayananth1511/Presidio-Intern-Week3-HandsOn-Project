import { useEffect } from 'react';
import { useTaskStore } from '../store/taskStore';
import axios from 'axios';

const fetchTasksAPI = async (): Promise<APITask[]> => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/todos?_limit=4`);
  return data;
};
import { TaskCard } from '../components/TaskCard';
import { AddTaskForm } from '../components/AddTaskForm';
import { TaskStats } from '../components/TaskStats';
import { useQuery } from '@tanstack/react-query';

interface APITask {
  id: number;
  title: string;
  completed: boolean;
}

const Tasks = () => {
  const { tasks, fetchTasks, toggleTaskStatus, deleteTask, loading } = useTaskStore();
  
  // Fetch tasks when the board loads
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const { data: apiTasks, isLoading: isApiLoading, error } = useQuery({
    queryKey: ['externalTasks'],
    queryFn: fetchTasksAPI,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <header className="mb-12">
        <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
          📊 Dashboard
        </h1>
        <p className="text-slate-500 font-medium">Manage your personal goals and external resources.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <AddTaskForm />
        </div>
        <div className="order-1 lg:order-2">
          <div className="glass-card p-6 h-full flex flex-col justify-center items-center">
            <h3 className="text-sm font-black uppercase tracking-widest opacity-40 mb-6">Stats Overview</h3>
            <TaskStats />
          </div>
        </div>
      </div>

      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-black">Your Tasks</h2>
          <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800 rounded-full" />
          <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map(n => <div key={n} className="h-48 glass-card bg-slate-200/50" />)}
          </div>
        ) : tasks.length === 0 ? (
          <div className="glass-card p-20 text-center border-dashed border-2">
            <p className="text-slate-400 font-medium italic text-lg">No personal tasks yet. Start by adding one above! 🚀</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
            {tasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onToggle={toggleTaskStatus} 
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-black">API Resources (External)</h2>
          <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800 rounded-full" />
        </div>

        {isApiLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="h-32 glass-card animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="p-8 bg-red-50 text-red-600 rounded-2xl font-bold border border-red-100">
            ❌ Couldn't load external resources.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {apiTasks?.map((task) => (
              <div key={task.id} className="p-4 glass-card group hover:translate-y-[-4px] transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-1.5 rounded-full ${task.completed ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-black opacity-30">API ID: {task.id}</span>
                </div>
                <p className="text-xs font-bold leading-tight line-clamp-2">
                  {task.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Tasks;
