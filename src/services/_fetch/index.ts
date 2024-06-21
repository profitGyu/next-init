'use server';

import { cookies } from 'next/headers';

import { PREFIX_URL } from './config';
import { outPutConsoleDebug, getIsHttpProtocol, paramsTransform, parseData } from './lib';

import type { UrlType, OptionsType, ReturnType, ITokenData } from './type';

/**
 * 토큰을 HTTP Protocol Authority 규격에 맞게 문자열로 반환하는 함수입니다.
 * @returns string
 */
const getTokenAuthorization = () => {
  const cookieStore = cookies();
  const tokenCookieValue = cookieStore.get('token')?.value;

  if (!tokenCookieValue) return '';

  const tokenData: ITokenData = JSON.parse(tokenCookieValue);

  return tokenData;
};

const fetchFunction = async <T = Response,>(url: UrlType, options?: OptionsType): ReturnType<T> => {
  const { params, ...restOptions } = options ?? {};

  const tokenData = getTokenAuthorization();
  const isHttpProtocol = getIsHttpProtocol(url);
  const searchParams = paramsTransform(params);

  const prefixParams = !!searchParams ? '?' + searchParams.toString() : '';

  if (!PREFIX_URL) {
    const errorText = '환경 변수를 읽어오는데 실패하였습니다.';
    throw new Error(errorText);
  }

  try {
    const startTime = new Date().getTime();

    const response = await fetch(isHttpProtocol ? url + prefixParams : PREFIX_URL + url + prefixParams, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenData ? tokenData.token_type + ' ' + tokenData.token : '',
      },
      credentials: 'include',
      cache: 'no-store',
      ...restOptions,
    });

    const endTime = new Date().getTime();

    const data = await parseDatßa(response);

    outPutConsoleDebug(response, data, endTime - startTime);

    return data;
  } catch (error) {
    const errorResponse = error as Response;

    if (typeof errorResponse === 'object') outPutConsoleDebug(errorResponse, await errorResponse.json());
  }
};

export { fetchFunction as cusFetch };
