import styled from "styled-components";


export const TopHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding-inline: 16px ;
  text-align:  center;
  background-color: #fff;
  border-bottom:  1px solid #f5f5f5;


  @media (min-width: ${({ theme }) => theme.BreakPoint.desktop1440}) {
    justify-content:start;
    width:100%;
    height:80px;
    padding-inline: 40px 50px;
  }

`
export const ToggleButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: black;
`