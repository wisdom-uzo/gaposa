import mongoose from 'mongoose'

const PaymentFile = new mongoose.Schema({
  paymentFileLink: {
    image1: { type: String },
    image2: { type: String }
  },
  email: { type: String, required: true },
  submissonType:{ type: String, required: true },
 
},
  {timestamps: true}
)

module.exports = mongoose.models.PaymentFile || mongoose.model('PaymentFile', PaymentFile)   