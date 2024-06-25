// import { AccountRepository } from '../domain/account-repository';
// import { User } from '../domain/user';
// import Cookies from 'js-cookie';


// export class ApiAccountRepository implements AccountRepository {
//     private ACCOUNT_API_URL = 'http://localhost:8080/api/v1/account';

//     async getAccount(): Promise<User> {
//         const token = Cookies.get('auth_token');
//         const headers = new Headers();
// // console.log(token)
//         if (token) {
//             headers.append('Authorization', `Bearer ${token}`);
//         } else {
//             throw new Error('No token found');
//         }

//         const response = await fetch(this.ACCOUNT_API_URL, {
//             headers: headers
//         });

//         if(!response.ok) {
//             throw new Error('request failed');
//         }
        
//         return await response.json();
//     }

// }



import { Either } from "@/features/shared/either";
import {
  AccountRepository,
  UpdateAccountParams,
} from "../domain/account-repository";
import { User } from "../domain/user";
import { cookies } from "next/headers";
import { Failure } from "@/features/shared/failure";
import { HttpMethod } from "@/features/shared/http-method";

const ACCOUNT_API_URL = "http://localhost:8080/api/v1/account";

export function apiAccountRepository(): AccountRepository {
  return {
    getByToken,
    updateByToken,
  };
}

async function getByToken(): Promise<Either<Failure, User>> {
  "use server";

  const response = await fetch(ACCOUNT_API_URL, {
    headers: {
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
  });

  if (!response.ok) {
    return Either.left({ message: "failed request" });
  }

  return Either.right(await response.json());
}

async function updateByToken(
  params: UpdateAccountParams
): Promise<Either<Failure, void>> {
  "use server";

  const response = await fetch(ACCOUNT_API_URL, {
    method: HttpMethod.PUT,
    headers: {
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
    body: JSON.stringify(params),
  });

  if (response.ok) {
    return Either.left({ message: "failed request" });
  }

  return Either.right(undefined);
}

