export type UrlType = RequestInfo | URL;

export type OptionsType = RequestInit & { params?: any };

export type ReturnType<T> = Promise<T | undefined>;

export interface ITokenData {
  token_type: string;
  token: string;
}
