import { User } from "@/features/users/domain/user";

export interface Comment {
  id: string;
  description: string;
  user: User;
  createdAt: string;
}