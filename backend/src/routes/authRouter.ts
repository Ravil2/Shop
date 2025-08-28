import { Router } from 'express'
import authControllers from '../controllers/authControllers.js'
import { check } from 'express-validator'
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from '../middleware/roleMiddleware.js'

const router = Router()

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('email', 'Email не может быть пустым').isEmail(),
    check('password', 'Пароль не может быть менее 4-х символов').isLength({
      min: 4,
      max: 20,
    }),
  ],
  authControllers.registration,
)

router.post('/login', authControllers.login)

router.get(
  '/users',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  authControllers.getUsers,
)

export default router
