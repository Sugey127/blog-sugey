// import { Post } from "../domain/post";
// import { CreatePostParams, PostRespository } from "../domain/post-repository";
// import Cookies from 'js-cookie';

// export class ApiPostRepository implements PostRespository {
//   private POST_API_URL = 'http://localhost:8080/api/v1/posts';

//   async getAll(): Promise<Post[]> {
//     const token = Cookies.get('auth_token');
//     const headers = new Headers();
// console.log(token)

//     if (token) {
//       headers.append('Authorization', `Bearer ${token}`);
//     } else {
//       throw new Error('No token found');
//     }

//     const response = await fetch(this.POST_API_URL, {
//       headers: headers,

//     });

//     if(!response.ok) {
//         throw new Error('failed request');
//     }

//     return await response.json();
//   }

//   async create(params: CreatePostParams): Promise<void> {
//     throw new Error();
//   }
// }


import { Post } from "../domain/post";
import { cookies } from "next/headers";
import { Comment } from "../domain/comment";
import { CreatePostParams, PostRespository } from "../domain/post-repository";
import { Either } from "@/features/shared/either";
import { Failure } from "@/features/shared/failure";
import { HttpMethod } from "@/features/shared/http-method";



export function apiPostRepository(): PostRespository {
    return {
        create,
        getAll,
        getAllCommentsByPostId,
    }
}

const POST_API_URL = 'http://localhost:8080/api/v1/posts';

async function create(params: CreatePostParams): Promise<Either<Failure, void>> {
    'use server'
    const formData = new FormData()
    formData.append('title', params.title);
    formData.append('description', params.description);

    if(params.imageFile) {
        formData.append('imageFile', params.imageFile);
    }

    const response = await fetch(POST_API_URL, {
        method: HttpMethod.POST,
        headers: {
            Authorization: `Bearer ${cookies().get('token')?.value}`
        },
        body: formData,
    });

    if(!response.ok) {
        return Either.left({ message: 'failed creation '});
    }
    
    return Either.right(undefined);
}

async function getAll(): Promise<Either<Failure, Post[]>> {
    const response = await fetch(POST_API_URL, {
        headers: {
            Authorization: `Bearer ${cookies().get('token')?.value}`
        }
    });
    return Either.right(await response.json());
}

async function getAllCommentsByPostId(postId: string): Promise<Either<Failure, Comment[]>> {
    const response = await fetch(`${POST_API_URL}/${postId}/comments`, {
        headers: {
            Authorization: `Bearer ${cookies().get('token')?.value}`
        }
    });

    if (!response.ok) {
        return Either.left({ message: 'failed request' })
    }

    return Either.right(await response.json());
}