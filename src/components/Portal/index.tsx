'use client';

import type { PropsWithChildren, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

const Portal = ({ children }: PropsWithChildren): ReactNode => {
  const [portalElement, setPortalElement] = useState<Element | DocumentFragment | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [children]);

  return portalElement ? <>{createPortal(children as any, portalElement)}</> : null;
};

export default Portal;