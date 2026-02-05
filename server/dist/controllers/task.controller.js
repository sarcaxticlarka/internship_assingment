import prisma from '../config/db.js';
import { z } from 'zod';
const taskSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
});
export const getTasks = async (req, res) => {
    try {
        const { id, role } = req.user;
        let tasks;
        if (role === 'ADMIN') {
            tasks = await prisma.task.findMany({ include: { user: { select: { name: true, email: true } } } });
        }
        else {
            tasks = await prisma.task.findMany({ where: { userId: id } });
        }
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
export const createTask = async (req, res) => {
    try {
        const validation = taskSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ errors: validation.error.issues });
            return;
        }
        const { title, description, status } = validation.data;
        const { id } = req.user;
        const task = await prisma.task.create({
            data: {
                title,
                description: description || null,
                status: status || 'PENDING',
                userId: id,
            },
        });
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const role = req.user.role;
        const task = await prisma.task.findUnique({ where: { id: Number(id) } });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        if (task.userId !== userId && role !== 'ADMIN') {
            res.status(403).json({ message: 'Not authorized' });
            return;
        }
        const updatedTask = await prisma.task.update({
            where: { id: Number(id) },
            data: req.body,
        });
        res.json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const role = req.user.role;
        const task = await prisma.task.findUnique({ where: { id: Number(id) } });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        if (task.userId !== userId && role !== 'ADMIN') {
            res.status(403).json({ message: 'Not authorized' });
            return;
        }
        await prisma.task.delete({ where: { id: Number(id) } });
        res.json({ message: 'Task removed' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
//# sourceMappingURL=task.controller.js.map