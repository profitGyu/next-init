
import type { ReactNode } from 'react';

import StyledProvider from 'styles/StyledProvider';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: '내편',
  description: '내편',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledProvider>
        <html lang={'ko'}>
          <body >
            <header>#</header>
            <main>{children}</main>s
            <footer>#</footer>
          </body>
        </html>
      </StyledProvider>
    </>
  );
};

export default RootLayout;