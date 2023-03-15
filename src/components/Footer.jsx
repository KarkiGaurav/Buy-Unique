import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { AiFillHome } from "react-icons/Ai";
import { FcAbout } from "react-icons/Fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/Md";
import { AiFillContacts } from "react-icons/Ai";
import { FaInstagramSquare } from "react-icons/Fa";
import { BsFacebook } from "react-icons/Bs";
import { AiFillTwitterCircle } from "react-icons/Ai";
import Button from '../styles/Button';

const Footer = () => {

    const Wrapper = styled.section`
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    ${'' /* justify-contant:center; */}
    align-items:center;
    background-color: #eadb9d;

    h2{
        text-align:center;
        margin-top:4rem;
        font-size:4rem;
        
    }
     h3, a{
        text-align:center;
        margin-top:2rem ;
        font-size:2rem;
        text-decoration:none;

    }
    
   
    h4{
        text-align:center;
        margin-bottom:2rem ;
        font-size:2rem;
        
    }
    .container{
        ${'' /* padding: 2rem, 3rem; */}

        display:flex;
        gap: 7rem;
        justify-contant:center;
       
        flex-wrap: wrap;
        margin:4rem 6rem 0 6rem ;
        ${'' /* padding-botton: 4rem; */}
    }

    .explore{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        gap: 1rem;
        align-items:center;
        justify-content:center;

    }
.social{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
}
    
    .icon{
          background: #eadb9d;
          border: 2px solid white;
          color: white;
          padding: 2px;
          border-radius: 50%;
          font-size: 3rem;
          ${'' /* display:flex;
          text-align: left; */}
          
        }

        .navbar-link {
            text-decoration: none;
            text-align:center;
            color: black;
            font-size: 1.7rem;
        }

        .user{
          display:flex;
          flex-direction: column;
          background: linear-gradient( to top, rgba(0, 0, 0, 0.212)50%  , rgba(0, 0, 0, 0.212)50% );
          border: 2px solid #eadb9d;
          padding: 2rem;
          ${'' /* border-radius: 2rem; */}
          font-size: 3rem;

        
  }

  input{
          width: 20rem;
          height: 3rem;
          margin-top: 1rem; 
          margin-bottom: 2rem;
          outline: none;
          border: 0;
          background: transparent;
          border-bottom: 2px solid #eadb9d;
          font-size: 1.7rem;

        }

        label{
          font-size: 2.5rem;
          color:#eadb9d;
        }

.main-footer{
    display: flex;
    flex-wrap: wrap;
    align-items:center;

    p{
        text-align:center;
        font-size: 1.7rem;
        font-family:Candara;
    }

    hr{
        color:white;
        width:100%;
    }
}
    
    `


    return (
        <Wrapper>

            <h2>BUY UNIQUE</h2>
            <h3>We offer high-quality hand made products with best delivery service, which you can trust blindly</h3>
            <div className='container'>


                <div className='explore'>
                <h3>Explore</h3>
                    <NavLink to="/" className="navbar-link" > <AiFillHome className='icon' /> Home  </NavLink>

                    <NavLink to="/About" className="navbar-link" > <FcAbout className='icon' /> About Us </NavLink>

                    <NavLink to="/Products" className="navbar-link"> <MdOutlineProductionQuantityLimits className='icon' />  Products </NavLink>

                    <NavLink to="/contact" className="navbar-link"> <AiFillContacts className='icon' /> Contact Us </NavLink>


                </div>

                <div className='social'>
                <h3>Social Links</h3>
                    <NavLink to="/" className="navbar-link" > <FaInstagramSquare className='icon' />  </NavLink>

                    <NavLink to="/" className="navbar-link" > <BsFacebook className='icon' />  </NavLink>

                    <NavLink to="/" className="navbar-link" > <AiFillTwitterCircle className='icon' />  </NavLink>
                </div>

                <div className='user'>
                <h4>Join Our Community</h4>
                    <label> Name</label>
                    <input type="text" autoComplete='off' name='name' />
                    <label> Email</label>
                    <input type="text" autoComplete='off' name='email' />
                    <Button>SUBSCRIBE</Button>

                </div>
                <div className="Call-Us">
                <h4>Call Us</h4>
               <a href='tel: 8077692820'> +91 8077692820</a>
            </div>
            </div>
           <hr/>
            <div className='main-footer'>
            
            <p> © {new Date().getFullYear()} Gaurav Singh Karki | All Rights Reserved</p>
            </div>
        </Wrapper>
    )
}

export default Footer
