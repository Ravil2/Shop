import express from 'express'
import mongoose from 'mongoose'
import authRouter from './routes/authRouter.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors({ origin: '*' }))

app.use(express.json())

app.use('/api/auth', authRouter)

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://qwerty:qwerty123@cluster0.tkwfcj4.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0`,
    )
    console.log('MongoDB connected')

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.error('Server start error:', error)
  }
}

start()
