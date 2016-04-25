import mongoose, { Schema } from 'mongoose'

var CvSchema = new Schema({
  cvName: String,
  userId: Schema.Types.ObjectId
})

var model = mongoose.moel('Cv', CvSchema)

export default model
