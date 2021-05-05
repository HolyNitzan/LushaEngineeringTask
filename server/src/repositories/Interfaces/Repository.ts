import { User } from "../../types/types";

export interface Repository {
  create(user: User): Promise<User>;
  findByEmail(user: User): Promise<User | null>
  getAll(page: number): Promise<User[]>;
  getCount(): Promise<number>
}
