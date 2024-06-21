export interface IPostAccountSignInEmail {
  id: string;
  password: string;
}

export interface IPostAccountSignInEmailRes {
  status: string;
  token: string;
}
