import { Request, Response, NextFunction } from 'express'

interface AuthRequest extends Request {
  user?: { id: string; roles: string[] }
}

export default function roleMiddleware(allowedRoles: string[]) {
  return function (req: AuthRequest, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      return next()
    }

    try {
      if (!req.user || !req.user.roles) {
        return res.status(403).json({ message: 'Пользователь не авторизован' })
      }

      const userRoles = req.user.roles
      const hasRole = userRoles.some((role) => allowedRoles.includes(role))

      if (!hasRole) {
        return res.status(403).json({ message: 'У вас нет доступа' })
      }

      next()
    } catch (error) {
      console.error('Role check error:', error)
      return res.status(403).json({ message: 'У вас нет доступа' })
    }
  }
}
