import { Schema, model, models } from 'mongoose';

const ExperienceSchema = new Schema({
  userId: { type: String, required: true },
  companyId: { type: String, required: true },
  type: {
    type: String,
    enum: ['Struggle', 'Warning', 'Tip', 'Expectation vs Reality'],
    required: true,
  },
  content: { type: String, required: true },
  tags: [{ type: String }],
  timePeriod: {
    type: String,
    enum: ['Week 1', 'Month 1', 'Month 3'],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default models.Experience || model('Experience', ExperienceSchema);
