import mongoose from 'mongoose'

const PaymentFile = new mongoose.Schema({
  paymentFileLink: { type: String, required: true  },
  email: { type: String, required: true },
 
},
  {timestamps: true}
)

module.exports = mongoose.models.PaymentFile || mongoose.model('PaymentFile', PaymentFile)   