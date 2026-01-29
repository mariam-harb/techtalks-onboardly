import { Schema, model, models, Document, Model } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  domain?: string;
  createdAt: Date;
}

const CompanySchema = new Schema<ICompany>({
  name: { type: String, required: true },
  domain: { type: String },
  createdAt: { type: Date, default: Date.now },
});

CompanySchema.index({ domain: 1 }, { unique: true, sparse: true });

const Company: Model<ICompany> =
  (models.Company as Model<ICompany>) || model<ICompany>('Company', CompanySchema);

export default Company;