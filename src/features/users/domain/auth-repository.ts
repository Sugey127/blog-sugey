// export interface SignInParams {
//   name: string;
//   email: string;
//   password: string;
// }

import { Either } from "@/features/shared/either";
import { Failure } from "@/features/shared/failure";

// export interface SignInParams {
//   email: string;
//   password: string;
// }

// export interface SignInResponse {
//   success: boolean;
//   token?: string;
// }

// export interface AuthRepostiry {
//   // signUp(params: SignInParams): Promise<void>;
//   signIn(params: SignInParams): Promise<SignInResponse>;
// }



export interface SignInParams {
    email: string;
    password: string;
}

export interface SignUpParams extends SignInParams {
    username: string;
}

export interface AuthRepository {
    singIn: (params: SignInParams) => Promise<Either<Failure, string>>;
    singUp: (params: SignUpParams) => Promise<Either<Failure, void>>;
}