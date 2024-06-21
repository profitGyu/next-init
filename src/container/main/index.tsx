'use client';

import { RightAside } from 'components/Aside';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import Portal from 'components/Portal';
import { AsideStore } from 'store/aside';

import { BodySection, MainContainer } from './index.styled';

interface IMainProps { };

const Main = () => {

  const { isOpen } = AsideStore()

  return (
    <>
      <MainContainer>
        <Header />
        <BodySection>
          바디 영역 입니다.
        </BodySection>
        <Footer />
      </MainContainer>
      <Portal>
        <RightAside isOpen={isOpen} />
      </Portal>
    </>

  )
};
export default Main;