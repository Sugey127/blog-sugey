import { User } from "@/features/users/domain/user";

export interface Comment {
  id: string;
  content: string;
  user: User;
  createdAt: string;
}