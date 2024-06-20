export interface SignInParams {
  name: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface AuthRepostiry {
  signUp(params: SignInParams): Promise<void>;
  signIn(params: SignInParams): Promise<{ token: string }>;
}