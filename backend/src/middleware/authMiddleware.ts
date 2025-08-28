import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config/config.js'

interface AuthRequest extends Request {
  user?: { id: string; roles: string[] }
}

export default function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(403).json({ message: 'Пользователь не авторизован' })
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
      return res.status(403).json({ message: 'Пользователь не авторизован' })
    }

    // Проверяем токен и приводим к нужной структуре
    const decoded = jwt.verify(token, secret) as { id: string; roles: string[] }

    if (!decoded || !decoded.id || !decoded.roles) {
      return res.status(403).json({ message: 'Пользователь не авторизован' })
    }

    req.user = decoded

    next()
  } catch (error) {
    console.error('JWT verification error:', error)
    return res.status(403).json({ message: 'Пользователь не авторизован' })
  }
}
