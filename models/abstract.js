import mongoose from 'mongoose'

const Abstract = new mongoose.Schema({
    titleAbstract : { type: String, required: true },
    authorName : { type: String, required: true },
    authorEmail : { type: String, required: true },
    authorPhone : { type: String, required: true },
    authorInstitution : { type: String, required: true },
    presentationType : { type: String, required: true },
    researchArea : { type: String, required: true },
    keywordsField : { type: String, required: true },
    file : { type: String, required: true }
},
  {timestamps: true}
)

module.exports = mongoose.models.Abstract || mongoose.model('Abstract', Abstract)     