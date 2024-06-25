import { apiAccountRepository } from "@/features/users/infra/api-account-repository";
import { Suspense } from "react";
import BumbleProfile from "./bumble-profile";
import { User } from "@/features/users/domain/user";

export async function Profile() {
  const { getByToken } = apiAccountRepository();
  const result = await getByToken();

  if (result.isRight()) {
    const user: User = {
      id: result.getRightValue()!.id,
      username: result.getRightValue()!.username,
      email: result.getRightValue()!.email,
      avatar: result.getRightValue()!.avatar
    };

    return (
      <BumbleProfile user={user} />
    );
  } else {
    return <p>Account not found</p>;
  }
}