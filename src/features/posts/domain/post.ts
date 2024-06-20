import { User } from "@/features/users/domain/user";

export interface Post {
  id: string;
  title: string;
  description: string;
  imageURL: File;
  user:  User;
  createdAt: string;
}