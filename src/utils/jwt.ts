import { sign, verify } from 'hono/jwt';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface JwtPayload {
  userId: number;
  email: string;
}

export const generateToken = async (payload: JwtPayload) => {
  return await sign(payload, JWT_SECRET, 'HS256');
};

export const verifyToken = async (token: string): Promise<JwtPayload | null> => {
  try {
    return await verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
};