import mongoose, { Schema } from 'mongoose'
import Cv from './cv'

var UserSchema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userNumber: {type: String, required: true},
  userAvatar: {type: String, default: ''},
  userEducations: [Schema.Types.Mixed],
  userSkills: [{ skillName: String, skillValue: Number }],
  userExperiencesImages: [String],
  Cvs: [{ type: Schema.Types.ObjectId, ref: 'Cv' }]
})

var model = mongoose.model('User', UserSchema)

export default model
