import { Either } from "@/features/shared/either";
import { User } from "./user";
import { Failure } from "@/features/shared/failure";

export interface UpdateAccountParams {
  username: string;
  password: string;
}

export interface AccountRepository {
  getByToken: () => Promise<Either<Failure, User>>;
  updateByToken: (
    params: UpdateAccountParams
  ) => Promise<Either<Failure, void>>;
}