import mongoose, { Schema } from 'mongoose'

var UserSchema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userNumber: {type: String, required: true},
  userAvatar: {type: String, default: ''},
  userEducations: [Schema.Types.Mixed],
  userSkills: [Schema.Types.Mixed],
  userExperiences: String,
  userCvs: [{ type: Schema.Types.ObjectId }]
})

var model = mongoose.model('User', UserSchema)

export default model
