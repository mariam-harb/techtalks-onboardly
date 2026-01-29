import { Schema, model, models, Document, Model, Types } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  companyId: Types.ObjectId;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
  },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.index({ email: 1, companyId: 1 }, { unique: true });

const User: Model<IUser> =
  (models.User as Model<IUser>) || model<IUser>('User', UserSchema);

export default User;