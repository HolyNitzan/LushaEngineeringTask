import constants from './constants';

export default {
  [constants.PORT]: process.env.PORT || 3000,
  [constants.MONGO_URL]: process.env.MONGO_URL || 'mongodb://localhost:27017/db',
  [constants.SECRET]: process.env.SECRET || 'someSuperStrongSecret',
}
