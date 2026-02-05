"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import api from '../../lib/api';
import Navbar from '../../components/Navbar';
import TaskCard from '../../components/TaskCard';
import TaskModal from '../../components/TaskModal';
import { Plus, Loader2, Search, Filter } from 'lucide-react';

export default function DashboardPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState<any | null>(null);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user) {
            fetchTasks();
        }
    }, [user]);

    const fetchTasks = async () => {
        try {
            const res = await api.get('/tasks');
            setTasks(res.data);
        } catch (error) {
            console.error('Failed to fetch tasks', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = () => {
        setCurrentTask(null);
        setIsModalOpen(true);
    };

    const handleEdit = (task: any) => {
        setCurrentTask(task);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm('Are you sure you want to delete this task?')) {
            try {
                await api.delete(`/tasks/${id}`);
                setTasks(tasks.filter((t) => t.id !== id));
            } catch (error) {
                console.error('Failed to delete task', error);
            }
        }
    };

    const handleSubmit = async (data: any) => {
        try {
            if (currentTask) {
                const res = await api.put(`/tasks/${currentTask.id}`, data);
                setTasks(tasks.map((t) => (t.id === currentTask.id ? res.data : t)));
            } else {
                const res = await api.post('/tasks', data);
                setTasks([...tasks, res.data]);
            }
        } catch (error) {
            console.error('Failed to save task', error);
        }
    };

    if (authLoading || (!user && loading)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <Loader2 className="w-8 h-8 animate-spin text-[#22c55e]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                        <p className="text-gray-400">
                            Welcome back, <span className="text-[#22c55e]">{user?.name}</span>. You have {tasks.length} tasks needing attention.
                        </p>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="flex items-center px-6 py-3 bg-[#22c55e] text-white rounded-xl hover:bg-[#16a34a] transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] font-bold text-sm"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Create New Task
                    </button>
                </div>

                {/* Search & Filter Bar (Visual only for now) */}
                <div className="flex gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search your tasks..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e] transition-colors"
                        />
                    </div>
                    <button className="flex items-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-colors">
                        <Filter className="w-5 h-5 mr-2" />
                        Filter
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-24">
                        <Loader2 className="w-10 h-10 animate-spin text-[#22c55e]" />
                    </div>
                ) : tasks.length === 0 ? (
                    <div className="text-center py-24 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <div className="mx-auto h-16 w-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-[#22c55e] mb-4">
                            <Plus className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-white">No tasks yet</h3>
                        <p className="mt-2 text-sm text-gray-400 max-w-sm mx-auto">
                            Get started by creating your first task to track your progress and stay organized.
                        </p>
                        <div className="mt-8">
                            <button
                                onClick={handleAdd}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-[#22c55e] hover:bg-[#16a34a] transition-all"
                            >
                                <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                Add Task
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                isAdmin={user?.role === 'ADMIN'}
                            />
                        ))}
                    </div>
                )}
            </div>

            <TaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={currentTask}
            />
        </div>
    );
}
