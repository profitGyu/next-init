import BreakPoint from './breakPoint';

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

const theme = {
  BreakPoint,
};

export default theme;
