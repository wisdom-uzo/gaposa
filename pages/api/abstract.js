import dbConnect from '../../utils/mongodb'
import Abstract from "../../models/abstract";

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const abstract = await Abstract.find({})
        res.status(200).json({ success: true, data: abstract })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
            const abstract = await Abstract.create(req.body)
            res.status(201).json({ success: true, data: abstract, massage: 'data uploaded successfully' })
      
         } catch (error) {
            res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}