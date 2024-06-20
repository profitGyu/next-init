type BreakPointType =
  | 'blank'
  | 'android'
  | 'ios'
  | 'tablet601'
  | 'desktop1440';

const BreakPoint = {
  blank: '1px',
  android: '360px',
  ios: '390px',
  tablet601: '601px',
  desktop1440: '1440px',
} satisfies Record<BreakPointType, string>;

export const BreakPointAsNumber = Object.keys(BreakPoint).reduce(
  (result, key) => {
    const newKey = key as BreakPointType;
    result[newKey] = parseInt(BreakPoint[newKey], 10);
    return result;
  },
  {} as Record<BreakPointType, number>,
);

export default BreakPoint;