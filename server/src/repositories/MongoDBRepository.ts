import { Model } from 'mongoose';
import { User, UserModelInterface } from '../types/types';
import { Repository } from './Interfaces/Repository';
import L from '../utils/Logger';

export class MongoDBRepository implements Repository {
  private readonly MAX_RESULTS = 10;

  constructor(private UserModel: Model<UserModelInterface>) {}

  async findByEmail(user: User): Promise<User | null> {
    L.info(`MongoDBRepository:findByEmail Finding user by email ${user.email}`)
    return this.UserModel.findOne({
      email: user.email,
    });
  }

  async create(user: User): Promise<User> {
    L.info(`MongoDBRepository:create creating user ${user.email}`)
    const userModel = new this.UserModel({
      ...user,
    });
    return userModel.save();
  }

  async getAll(page: number): Promise<User[]> {
    L.info(`MongoDBRepository:create Fetching users from page ${page}`)
    var skip = page * (this.MAX_RESULTS);
    return this.UserModel.find({}).select('email').skip(skip).limit(this.MAX_RESULTS);
  }
  
  async getCount(): Promise<number>{
    L.info(`MongoDBRepository:create Fetching users count`)
    return this.UserModel.count();
  }
}
