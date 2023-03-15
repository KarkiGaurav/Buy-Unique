import React from 'react'
import styled from 'styled-components'
import { GrLocation } from "react-icons/Gr";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/Ai";
import Button from './styles/Button';

const Contact = () => {

  const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
 
   .contact-us{
       height:auto;
       width:100%;
       background: linear-gradient( to top, rgba(0, 0, 0, 0.712)50%  , rgba(0, 0, 0, 0.712)50% ),url(./images/Contact.jpg);
       background-repeat: no-repeat;
       background-position: center;
       background-size:100% 100%;
       display: grid;
       place-items:center;
     
       
       h2{
        font-size: 4rem;
        margin-top: 4rem;

       }

      p{
        font-size: 2rem;
        margin-top: 2rem;
        text-transform: capitalize;
        text-align: center;
      }

      .ctontent{
        display:flex;
        flex-wrap:wrap;
        gap: 15rem;
        align-items: center;
        margin: 5rem 0;
     }


   }

   .contact-icon{
        display:flex;
        justify-contant: space-between;
        gap: 3rem;
        flex-direction: column;
      
      }

      .icon{
          opacity: 60%;
          background:white;
          border: 2px solid #eadb9d;
          padding: 2px;
          border-radius: 50%;
          font-size: 3rem;
          
        }

        b{
          font-size: 2.5rem;
          color: #eadb9d;
        }

   
   .info{
    font-size: 1.5rem;
    margin-left: 3.5rem;
    color: #eadb9d;
   }





  .contact-form{
          display:flex;
          flex-direction: column;
          background: linear-gradient( to top, rgba(0, 0, 0, 0.212)50%  , rgba(0, 0, 0, 0.212)50% );
          border: 2px solid #eadb9d;
          padding: 2rem;
          font-size: 3rem;
          justify-content:start;

        
  }

  input{
          width: 40rem;
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
          display:flex;
          justify-content:start;

        }





  .map{
    margin: 2rem 4rem;
  }
  `


  return (

    <Wrapper>

      <div className='contact-us'>
        <h2>Contact US</h2>
        <p>If you require any further information, feel free to Contact us.</p>
        <div className='ctontent'>
          <div className='contact-icon'>
            <span> <GrLocation className='icon' /> <b>Address</b> <br /> <span className='info' > Almora Uttarakhand (262601)</span></span> <br />
            <span> <FiPhoneCall className='icon' /> <b>Phone</b> <br /> <span className='info' > +91 8077692820 </span> </span> <br />
            <span> <AiOutlineMail className='icon' /> <b>Email</b> <br /> <span className='info' >karkigauravsingh@gmail.com </span> </span>
          </div>




          <form className='contact-form' action='https://formspree.io/f/xlekneln' method='Post'>
            <label> Name</label>
            <input type="text" autoComplete='off' name='name' placeholder='Enter Your Name' />
            <label> Email</label>
            <input type="text" autoComplete='off' name='email' placeholder='Enter Your Email' />
            <label> Massage</label>
            <input type="text" autoComplete='off' name='massage' placeholder='Enter Your Massage...' />

            <Button>Send</Button>
          </form>

        </div>



      </div>


      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5971.517715431932!2d79.65997608625085!3d29.601319992995826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1677405113938!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Wrapper>
  )
}

export default Contact
