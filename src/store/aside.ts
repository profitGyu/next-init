import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface IAsideProps {
  isOpen: boolean;
}

export interface IAsideStore extends IAsideProps {
  setStore: (store: Partial<IAsideStore>) => void;
}

export const AsideStore = create<IAsideStore, [['zustand/devtools', null]]>(
  devtools((set) => ({
    isOpen: false,
    setStore: (params: Partial<IAsideStore>) => set(() => ({ ...params })),
  })),
);
