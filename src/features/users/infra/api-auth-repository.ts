// import { AuthRepostiry, SignInParams, SignInResponse } from "../domain/auth-repository";
// import Cookies from 'js-cookie';

// export class ApiAuthRepository implements AuthRepostiry {
//   private ACCOUNT_API_URL = 'http://localhost:8080/api/v1/auth/sign-in';


//   async signIn(params: SignInParams): Promise<SignInResponse> {
//     const response = await fetch(this.ACCOUNT_API_URL, {
//       method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(params),
//   });

//   if (!response.ok) {
//     throw new Error('Request failed');
//   }

//   const data = await response.json();

//   if (!data.access_token) {
//     throw new Error('Token not found in response');
//   }

//   // Guardar el token en una cookie
//   Cookies.set('auth_token', data.access_token, { expires: 6, secure: true, sameSite: 'strict' });

//   return { success: true, token: data.access_token };
// }
// }

import { Either } from "@/features/shared/either";
import {
  AuthRepository,
  SignInParams,
  SignUpParams,
} from "../domain/auth-repository";
import { Failure } from "@/features/shared/failure";
import { HttpMethod } from "@/features/shared/http-method";

const AUTH_API_URL = "http://localhost:8080/api/v1/auth";

export function apiAuthRepository(): AuthRepository {
  return {
    singIn,
    singUp,
  };
}

async function singIn(params: SignInParams): Promise<Either<Failure, string>> {
  const response = await fetch(`${AUTH_API_URL}/sign-in`, {
    method: HttpMethod.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    return Either.left({ message: "failed request" });
  }

  const { access_token } = await response.json();

  return Either.right(access_token);
}

async function singUp(params: SignUpParams): Promise<Either<Failure, void>> {
  const response = await fetch(`${AUTH_API_URL}/sign-up`, {
    method: HttpMethod.POST,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    return Either.left({ message: "failed request" });
  }

  return Either.right(undefined);
}
