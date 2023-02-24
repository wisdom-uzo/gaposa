import mongoose from 'mongoose'

const User = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  otherName: { type: String, required: true },
  participantType: { type: String, required: true  },
  email: { type: String, required: true },
  institutionOrganisation: { type: String, required: true },
  department: { type: String, required: true },
  country: { type: String, required: true },
  stateProvince: { type: String, required: true },
  city: { type: String, required: true },
},
  {timestamps: true}
)

module.exports = mongoose.models.User || mongoose.model('User', User)      


