import type { Request, Response } from 'express';
interface AuthRequest extends Request {
    user?: {
        id: number;
        role: string;
    };
}
export declare const getTasks: (req: AuthRequest, res: Response) => Promise<void>;
export declare const createTask: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateTask: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteTask: (req: AuthRequest, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=task.controller.d.ts.map