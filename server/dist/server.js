import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './config/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import { setupSwagger } from './utils/swagger.js';
app.use(cors());
app.use(express.json());
setupSwagger(app);
app.get('/', (req, res) => {
    res.send('API is running...');
});
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
//# sourceMappingURL=server.js.map