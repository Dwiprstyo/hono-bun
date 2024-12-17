import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { PrismaClient } from '@prisma/client';

// Import route handlers
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import userRoutes from './routes/users';
import interactionRoutes from './routes/interactions';

const app = new Hono();
const prisma = new PrismaClient();

// Middleware
app.use('*', cors());

const api = app.basePath('/api');

// Route groups
api.route('/auth', authRoutes);
api.route('/posts', postRoutes);
api.route('/users', userRoutes);
api.route('/interactions', interactionRoutes);


// Error handling
app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: 'Internal Server Error' }, 500);
});

export default app;