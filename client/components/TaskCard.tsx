"use client";

import { Edit2, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
    id: number;
    title: string;
    description?: string;
    status: string;
    user?: { name: string };
}

interface TaskCardProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
    isAdmin: boolean;
}

const statusConfig: Record<string, { icon: any; color: string; bg: string }> = {
    PENDING: { icon: Clock, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    IN_PROGRESS: { icon: AlertCircle, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    COMPLETED: { icon: CheckCircle, color: 'text-[#22c55e]', bg: 'bg-[#22c55e]/10' },
};

const TaskCard = ({ task, onEdit, onDelete, isAdmin }: TaskCardProps) => {
    const config = statusConfig[task.status] || statusConfig.PENDING;
    const StatusIcon = config.icon;

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-[#22c55e]/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">

            <div className="flex justify-between items-start mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${config.bg} ${config.color}`}>
                    <StatusIcon className="w-3 h-3 mr-1.5" />
                    {task.status.replace('_', ' ')}
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        title="Edit"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{task.title}</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
                {task.description || 'No description provided.'}
            </p>

            {isAdmin && task.user && (
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>Owner: {task.user.name}</span>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
