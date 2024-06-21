'use client';

import type { ReactNode } from 'react';
import React from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyles';
import StyledComponentsRegistry from './StyledRegistry';
import theme from './theme/base';

const shouldForwardProp = (propName: string, target: any) => {
  return typeof target === "string" ? isPropValid(propName) : true;
};


const StylesProvider = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  </StyledComponentsRegistry>
);

export default StylesProvider;