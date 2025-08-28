import { model, Schema } from 'mongoose'

const RoleSchema = new Schema(
  {
    value: { type: String, unique: true, required: true, default: 'USER' },
  },
  { timestamps: true },
)

export default model('Role', RoleSchema)
