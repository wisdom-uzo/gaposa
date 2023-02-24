import PaymentFile from '../../models/paymentFile'
import dbConnect from '../../utils/mongodb'


export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const payment = await PaymentFile.find({})
        res.status(200).json({ success: true, data: payment })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
            const payment = await PaymentFile.create(req.body)
            res.status(201).json({ success: true, data: payment, massage: 'image uploaded' })
      
         } catch (error) {
            res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}