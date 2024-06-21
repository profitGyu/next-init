'use client';

import { AsideContainer, AsideDimWrapper } from './RightAside.styled';

export interface IRightAsideProps {
  isOpen: boolean;
};
const RightAside = (props: IRightAsideProps) => {
  const { isOpen } = props;
  return (
    <AsideDimWrapper isOpen={isOpen} >
      <AsideContainer>
        사이드 nav 바입니다.
      </AsideContainer>
    </AsideDimWrapper>)
};
export default RightAside;