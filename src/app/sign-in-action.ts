"use server";
import { SignInParams } from "@/features/users/domain/auth-repository";
import { apiAuthRepository } from "@/features/users/infra/api-auth-repository";
import { cookies } from "next/headers";

export async function singInAction(params: SignInParams) {
  const { singIn } = apiAuthRepository();
    const email = params.email;
  const password = params.password;
  const result = await singIn({ email, password });

  if (result.isRight()) {
    cookies().set({
      name: "token",
      value: result.getRightValue()!,
      httpOnly: true,
      path: "/",
    });
  }

  return result.isRight();
}
