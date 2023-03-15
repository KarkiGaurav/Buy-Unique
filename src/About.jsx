import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useProductContext } from './context/productContext';

import { BiPhoneCall } from "react-icons/Bi";
import { FaInstagramSquare } from "react-icons/Fa";
import { BsFacebook } from "react-icons/Bs";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { BsEmojiSmile } from "react-icons/Bs";



const About = () => {

  const Wrapper = styled.section`


    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    ${'' /* justify-contant:center; */}
    align-items:center;
    background-color: #5f2f14;
    color:#eadb9d;

   .about-us{
       height:auto;
       min-height:60vh;
       width:100%;
       background: linear-gradient( to top, rgba(0, 0, 0, 0.712)50%  , rgba(0, 0, 0, 0.712)50% ),url(./images/about.jpg);
       background-repeat: no-repeat;
       background-position: center;
       background-size:100% 100%;
       display: grid;
       place-items:center;
     
       
       h2{
        font-size: 4rem;
        margin-top: 4rem;
        color:#5f2f14;

       }
       p{
        margin-top: 1rem;
       }

   }

   p{
        font-size: 2rem;
        margin: 2rem 2rem 0 2rem;
        text-align:justify;
        text-transform: capitalize;
       
        display:flex;
        
      }

      h3{
        font-size: 3rem;
        margin-top: 4rem;
        color:black;
      }

      .social{
        display:flex;
        ${'' /* flex-direction:column; */}
        align-tems:center;
        justify-content:end;
        flex-wrap: wrap;
        padding: 3rem;
}
    
    .icon{
          background: #eadb9d;
          border: 2px solid white;
          color: white;
          padding: 2px;
          border-radius: 50%;
          font-size: 3rem;
          margin: 0 3rem;
          
        }

        marquee{
          font-size: 2rem;
        }
        
  `
  {/* this is  just for checking the usecontext  */}
  const {Myname} = useProductContext();

  return (
    
    <Wrapper>
        {Myname}
    

      <div className='about-us'>
        <h2> About US</h2>
        <p>Welcome to our shop! We are a family-owned business based in Uttarakhand, and we specialize in creating beautiful woolen and wooden handmade products.</p>
      </div>

      <div>
        <h3> Our Story </h3>

        <p>Our love for handmade products began many years ago when we stumbled upon a small shop selling handcrafted goods. We were fascinated by the intricate designs and the effort that went into making each piece. From that day, we knew that we wanted to create handmade products that would bring joy to people's lives.

          With years of hard work and dedication, we established our business in [year]. Our passion for handmade goods is reflected in everything we do, from carefully selecting the materials to creating unique designs that our customers love.</p>


      </div>

      <div>
        <h3>Our Products</h3>

        <p>
          Our woolen and wooden handmade products are made with the highest quality materials and created by skilled artisans who take great pride in their work. From cozy blankets to wooden kitchenware, our products are designed to bring warmth and comfort to your home.</p>

      </div>

      <div>
        <h3>Social Responsibility</h3>
        <p>We believe in using sustainable materials and supporting local communities. All of our wool comes from ethically sourced farms, and we partner with local artisans to create our wooden products. By supporting us, you are also supporting our commitment to social responsibility.</p>
      </div>

      <div>
        <h3>Customer Service</h3>
        <p>
          We are committed to providing our customers with exceptional service. If you have any questions about our products or need assistance with your purchase, please do not hesitate to contact us.
        </p>
        <div className='social'>
                
                <div className="Call-Us">
               <a href='tel: 8077692820'> <BiPhoneCall className='icon' /></a>
            </div>
                    <NavLink to="/" className="navbar-link" > <FaInstagramSquare className='icon' />  </NavLink>

                    <NavLink to="/" className="navbar-link" > <BsFacebook className='icon' />  </NavLink>

                    <NavLink to="/" className="navbar-link" > <AiFillTwitterCircle className='icon' />  </NavLink>
                </div>
      </div>

      <marquee> <span><BsEmojiSmile className='icon' /></span> Thank you for visiting our shop, and we look forward to sharing our handmade products with you. <span><BsEmojiSmile className='icon' /></span> </marquee>




     
    </Wrapper>
  )
}

export default About
