import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMessage extends Document {
  chatId: string;
  userId: number;
  userName: string;
  admin_name: string;
  reply: string;
  text: string;
  avatarUrl?: string;
  date: Date;
}

const messageSchema = new Schema<IMessage>({
  chatId: { type: String, required: true },
  userId: { type: Number, required: true },
  userName: { type: String, required: false },
  admin_name: {type: String, required: false},
  reply: {type: String, required: false},
  text: { type: String, required: false },
  avatarUrl: { type: String },
  date: { type: Date, default: Date.now },
});

export const Message: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema, 'telegram_messages');
