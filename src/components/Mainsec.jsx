import React from 'react'
import styled from 'styled-components';
import Button from '../styles/Button';

const Mainsec = () => {

    const Wrapper = styled.section`
    margin: 0 2rem;
    width: 100%;
    display: flex;
    gap: 4rem;
    height: 70vh;

    .sec-one{
        margin-top: 2rem;
        font-size: 3rem;
        display:grid;
        place-items:center;
        height: 65vh;
        width: 100%;
        background-image: url("./images/secone.jpg"), linear-gradient(rgba(0, 0, 88, 0.212), rgba(0, 0, 0, 0.493));
        background-repeat: no-repeat;
        background-position: center;
        background-size:100% 100%;
        animation: backImgOne 30s linear  infinite ;
    }

   @keyframes backImgOne{
      0%{
         background-image: url("./images/secone1.jpg");
      }

      20%{
         background-image: url("./images/secone2.jpg");
      }

      40%{
         background-image: url("./images/secone3.jpg");
      }

      60%{
         background-image: url("./images/secone4.jpg");
      }

      80%{
         background-image: url("./images/secone5.jpg");
      }
      100%{
        background-image: url("./images/secone6.jpg");
      }
   }
    .sec-two{
        margin-top: 2rem;
        font-size: 3rem;
        display:grid;
        place-items:center;
        height: 65vh;
        width: 100%;
        background-image: url("./images/sectwo.jpg"), linear-gradient(rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0.493));
        background-repeat: no-repeat;
        background-position: center;
        background-size:100% 100%;
        animation: backImgTwo 30s linear  infinite;
    }

   @keyframes backImgTwo{
      0%{
         background-image: url("./images/sectwo1.jpg");
      }

      20%{
         background-image: url("./images/sectwo2.jpg");
      }

      40%{
         background-image: url("./images/sectwo3.jpg");
      }

      60%{
         background-image: url("./images/sectwo4.jpg");
      }

      80%{
         background-image: url("./images/sectwo5.jpg");
      }
      100%{
        background-image: url("./images/secone6.jpg");
      }
   }
    
    `

  return (
    <Wrapper> 

    <h2 className='sec-one'>THIS IS BUY UNIQUE - YOUR MOST WELCOM 
    <Button>Sign Up</Button>
    </h2>
    

    <h2 className='sec-two' >HERE YOU CAN GET AMAZING UNIQUE ITEMS   <Button>Log In</Button>
    </h2>
   
    </Wrapper>
      
    
  )
}

export default Mainsec;
