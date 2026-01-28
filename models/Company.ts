import { Schema, model, models } from 'mongoose';

const CompanySchema = new Schema({
  name: { type: String, required: true },
  domain:{type:String},
  createdAt: { type: Date, default: Date.now },
});

export default models.Company || model('Company', CompanySchema); 