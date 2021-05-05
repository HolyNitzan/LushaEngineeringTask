import crypto from 'crypto';
import config from 'config';
import constants from '../../../config/constants';
import { Schema, model } from 'mongoose';
import { UserModelInterface } from '../../types/types';

const UserSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  description: String,
}, {
  collection: 'users'
});

UserSchema.pre<UserModelInterface>('save', async function () {
  const secret: string = config.get(constants.SECRET)
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(this.password);
  const hash = hmac.digest('hex');
  this.password = hash;
});

export default model<UserModelInterface>('User', UserSchema);
