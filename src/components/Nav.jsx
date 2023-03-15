import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {

  const [item, setitem] = useState();
  const Nav = styled.nav`
  .navbar{
      background-color: #F6F8FA;
      display: flex;
      height: 3rem;
      width: 100%;
      position:relative;
      top:0;

  }

  .navbar-list{
     display : flex;
     align-items: center;
     float: right;
     list-style: none;
     position:absulate;
     right:0;


     .navbar-link{
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    margin: 0 2rem;

    &:active, &:visited{
      color: black;

    }

    &:hover{
    color: white;
    
    background-color:#5f2f14;
    border-bottom: 4px solid white;
    border-radius: 10px;
    transition: .5s;

  }
  } 
  
  }

  .preant{
    position: relative;
    background-color: white;
    width: 8rem;
    border: 2px solid black;
    border-radius:50%;
    height: 5rem;
    width: 6rem;
    display: flex;
    align-items: center;
   

    .cart-basket{
     position:relative;
     font-size: 5rem;
     display: flex;
    align-items: center;
    justify-content: center;
  }
    .item-number{
    position: absolute;
    color: black;
    display: grid;
    place-items: center;
    top: -20%;
    left: 70%;
    background-color: purple;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 3rem;
    width: 3rem;
    z-index: 999;

  }
  }

.mobile-menu{
  display: none;
  font-size: 4rem;
  cursor: pointer;

}
  .mobile-nav[name = "close-menu"]{
    display: none;
    
  }
 .close-menu{
      display:none;
      
    }
 

@media(max-width:768px){

.mobile-menu{
  display: inline-block;
  font-size: 4rem;
  cursor: pointer;
  z-index: 9999;

    .mobile-menu{
     font-size: 4.2rem;
     color:black;
    
}

}

 
.navbar-list{
      background-color: #eadb9d;
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      position:relative;
      visibility:hidden;
      opacity:0;
      transform: translateX(100%);
      transition: 2s;

}

.active .navbar-list{
      visibility: visible;
      opacity: 1;
      z-index: 999;
      transform: translateX(0);
      transform-origin: right;
      transition: 2s;
}

.active .navbar-link{
  margin: 2rem 0 ;
}


.active .open-menu{
        display:none;
    }

   .active .close-menu{
      display:inline-block;
      z-index: 9999;
    }
}


  
  `;
  return (
    <>

      <Nav>
        <div className={item ? "navbar active" : "navbar"}>
          <ul className='navbar-list'>

            <li><NavLink to="/" className="navbar-link" onClick={() => setitem(false)}> Home </NavLink></li>

            <li><NavLink to="/About" className="navbar-link"  onClick={() => setitem(false)} >About Us </NavLink></li>

            <li><NavLink to="/Products" className="navbar-link"  onClick={() => setitem(false)}>Products </NavLink></li>

            <li><NavLink to="/contact" className="navbar-link" onClick={() => setitem(false)} >Contact Us </NavLink></li>

            {/* <li><NavLink to="/SingleProduct" className= "navbar-link" >Single Product </NavLink></li> */}

            <li><NavLink to="/Cart" className="navbar-link preant" onClick={() => setitem(false)}> <FiShoppingCart className="cart-basket" /> <span className='item-number'> 0 </span> </NavLink></li>

          </ul>

          <div className='mobile-menu'>
            <CgMenu name='open-menu' className='open-menu mobile-nav' onClick={() => setitem(true)} />

            <CgClose name='close-menu' className='close-menu  mobile-nav' onClick={() => setitem(false)} />

          </div>
        </div>

      </Nav>


    </>
  )
}

export default Nav
