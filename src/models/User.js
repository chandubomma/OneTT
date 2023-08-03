import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name of the user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email of the user.'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password of the user.'],
  }
})

export default mongoose.models.Users || mongoose.model('Users', UserSchema)