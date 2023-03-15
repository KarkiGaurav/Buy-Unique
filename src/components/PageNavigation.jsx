import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {

  const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`;
  return (
    <Wrapper>
      <NavLink to="/" >Home</NavLink>/{title}
    </Wrapper>
  )
}

export default PageNavigation

