import { Request, Response } from 'express'
import User from '../models/User.js'
import Role from '../models/Role.js'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { secret } from '../config/config.js'

const generateAccessToken = (id: string, roles: string[]) => {
  const payload = { id, roles }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

const saltRounds = 10

class AuthController {
  async registration(req: Request, res: Response) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Ошибка при регистрации', errors })
      }

      const { username, email, password } = req.body

      const candidate = await User.findOne({ email })
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким email уже существует' })
      }

      const hashPassword = bcrypt.hashSync(password, saltRounds)
      const userRole = await Role.findOne({ value: 'USER' })

      if (!userRole) {
        return res.status(400).json({ message: 'Роль USER не найдена' })
      }

      const user = new User({
        username,
        email,
        password: hashPassword,
        roles: [userRole.value],
      })

      await user.save()
      return res.json({ message: 'Пользователь был успешно зарегистрирован' })
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Registration Error' })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким email не найден' })
      }

      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: 'Пароль неверен' })
      }

      const token = generateAccessToken(user._id.toString(), user.roles)
      return res.json({ token })
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Login Error' })
    }
  }

  async profile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id

      const user = await User.findById(userId).select('-password')
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' })
      }

      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Ошибка при получении профиля' })
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find().select('-password')
      res.json(users)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  }
}

export default new AuthController()
