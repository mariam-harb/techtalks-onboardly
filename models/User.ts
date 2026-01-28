import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  companyId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.User || model('User', UserSchema);