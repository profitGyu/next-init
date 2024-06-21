'use client';

import type { ReactNode } from 'react';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyles';
import StyledComponentsRegistry from './StyledRegistry';
import theme from './theme/base';

const StylesProvider = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default StylesProvider;