import { cusFetch } from 'services/_fetch';

import type { IPostAccountSignInEmail, IPostAccountSignInEmailRes } from './type';

export const PostAccountSignInEmailFetch = async (params: IPostAccountSignInEmail) => {
  try {
    const res = await cusFetch<IPostAccountSignInEmailRes>(`/account/sign/in/email`, {
      method: 'POST',
      params,
    });

    if (res) return res;
  } catch (error) {
    return undefined;
  }
};
ß;
