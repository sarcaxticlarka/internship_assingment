import type { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
    user?: any;
}

export const adminOnly = (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (req.user && req.user.role === 'ADMIN') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};
