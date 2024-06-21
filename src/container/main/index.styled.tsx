import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: skyblue;


@media (min-width: ${({ theme }) => theme.BreakPoint.desktop1440}) {
    max-width: 100%;
    background-color: skyblue ;
  }
`

export const BodySection = styled.section`
  display: flex;
  flex-direction:column;
  height: calc(100% - 100px);
  background-color:green;
`