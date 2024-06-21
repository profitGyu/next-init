import type { UrlType } from './type';

/**
 * URL이 http 프로토콜인지 확인하는 함수입니다.
 * @param url
 * @returns RegExpMatchArray | null
 */
export const getIsHttpProtocol = (url: UrlType) => url.toString().match(/^http/i);

/**
 *
 * fetch시 콘솔 디버그 찍어주는 함수
 *
 */

export const outPutConsoleDebug = (response: Response, data?: any, time?: number) =>
  console.debug(
    `${response.status === 200 ? '\x1b[32m%s' : '\x1b[31m%s'}\x1b[30m%s${
      response.status !== 200 ? '\x1b[31m%s' : '\x1b[0m'
    }\x1b[0m`,
    `[${response.status}]`,
    response.url,
    `${time != null ? `(${time}ms)` : ''}`,
    `${response.status !== 200 ? `(${data != null ? data.message : '데이터가 존재하지 않습니다.'})` : ''}`,
  );

/**
 * 정상적인 값을 가지고 왔는지 확인하고 반환합니다.
 * @param Response
 * @returns boolean
 */
export const parseData = async (response: Response) => {
  if (response.status === 200) return await response.json();

  throw response;
};

/**
 * 데이터가 배열인 경우 전달 파라미터 값 변경 로직입니다.
 * @param params
 */
export const paramsTransform = (params: any) => {
  const searchParams = new URLSearchParams();

  if (!!params) {
    Object.entries(params).map(([key, value]) => {
      if (Array.isArray(value)) value.forEach((v) => searchParams.append(`${key}[]`, v));
      else searchParams.set(key, params[key]?.toString());
    });
  }

  return searchParams;
};
