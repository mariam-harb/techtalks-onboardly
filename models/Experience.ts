import { Schema, model, models, Document, Model, Types } from 'mongoose';

export type ExperienceType = 'Struggle' | 'Warning' | 'Tip' | 'Expectation vs Reality';
export type ExperienceTimePeriod = 'Week 1' | 'Month 1' | 'Month 3';

export interface IExperience extends Document {
  userId: Types.ObjectId;
  companyId: Types.ObjectId;
  type: ExperienceType;
  content: string;
  tags: string[];
  timePeriod: ExperienceTimePeriod;
  createdAt: Date;
}

const ExperienceSchema = new Schema<IExperience>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  type: {
    type: String,
    enum: ['Struggle', 'Warning', 'Tip', 'Expectation vs Reality'] as ExperienceType[],
    required: true,
  },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  timePeriod: {
    type: String,
    enum: ['Week 1', 'Month 1', 'Month 3'] as ExperienceTimePeriod[],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

ExperienceSchema.index({ type: 1, timePeriod: 1 });
ExperienceSchema.index({ userId: 1, timePeriod: 1 });
ExperienceSchema.index({ companyId: 1, createdAt: -1 });

const Experience: Model<IExperience> =
  (models.Experience as Model<IExperience>) || model<IExperience>('Experience', ExperienceSchema);

export default Experience;
