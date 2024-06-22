import { User } from "./user";

export interface AccountRepository {
  getAccount(): Promise<User>;
}