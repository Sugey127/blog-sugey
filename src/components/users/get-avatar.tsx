import { apiAccountRepository } from "@/features/users/infra/api-account-repository";
import { Avatar } from "./avatar";

export async function GetAvatar({ size }: { size: number }) {
  const { getByToken } = apiAccountRepository();
  const result = await getByToken();

  return result.isRight() ? (
    <Avatar
      username={result.getRightValue()!.username}
      imageURL={result.getRightValue()?.avatar}
      size={size}
    />
  ) : (
    <p>failed request</p>
  );
}
