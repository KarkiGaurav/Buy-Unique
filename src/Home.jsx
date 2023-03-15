import React from 'react'
import styled from 'styled-components';
import Featureproduct from './components/Featureproduct';
import Mainsec from './components/Mainsec';
const Home = () => {

  const Wrapper = styled.section`
  
   background-color:#5f2f14;
   background-repeat: no-repeat;
   background-position: center;
   background-size:100% 100%;
  
   width: 100%;
  `
  return (

   
    <>
    <Wrapper>

     <Mainsec/>
     <Featureproduct/>

    </Wrapper>
    </>
  )
};

const Wrapper = styled.section`
background-color: ${({theme})=> theme.colors.bg};
width:100%;
height:100vh;
`;



export default Home;
