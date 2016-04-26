import mongoose, { Schema } from 'mongoose'
import User from './user'

var CvSchema = new Schema({
  cvName: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

var model = mongoose.moel('Cv', CvSchema)

export default model
