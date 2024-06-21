import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  @media (min-width: ${({ theme }) => theme.BreakPoint.desktop1440}) {
    display: none;
  }

`
