'use client';

import type { ReactNode } from 'react';
import React from 'react';

import GlobalStyle from './GlobalStyles';
import StyledComponentsRegistry from './StyledRegistry';

const StylesProvider = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <GlobalStyle />
    {children}
  </StyledComponentsRegistry>
);

export default StylesProvider;