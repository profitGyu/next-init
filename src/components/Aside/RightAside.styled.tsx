'use client'

import styled from "styled-components";

import type { IRightAsideProps } from "./RightAside";

export const AsideDimWrapper = styled.div<Pick<IRightAsideProps, 'isOpen'>>`
  position: fixed;
  top:0;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 30%);
  

  @media (min-width: ${({ theme }) => theme.BreakPoint.desktop1440}){
    display: none ;
  };
`


export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  background-color: yellow ;
  transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);

  @media (min-width: ${({ theme }) => theme.BreakPoint.desktop1440}){
    width: 268px;
  }

`