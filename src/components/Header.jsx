import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './nav'

const Header = () => {

  const Mainheader = styled.header`
  
  padding: 0 4.8rem;
  height: 7rem;
  background-color: #eadb9d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img{
    height:2px;
    width:1px;
    border: 2px solid-purple;
    border-radius: 1rem;
   
  }
  `
  return (
    
    <Mainheader className='header-sec'>
      <NavLink to="/" className="logo">
        <img src= './images/logo.jpg' alt='this is my logo'/> 
      </NavLink>

     <Nav/>
    </Mainheader>

    
    
  )
}

export default Header
