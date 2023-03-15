import React, { useState } from 'react'
 import Button from './styles/Button';
import './index.css';

const Ragister = () => {

  const [uservalue, setvalue] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""

  });

  const clickData = (event) => {
    const {value ,name  } = event.target

    setvalue( (preValue) =>{
              return{
                 ...preValue,
                 [name] : value,
              };
            });
  }
  
  return (
    
      <>
      <div className='main-container'>
        <form className='contact-form' autoComplete='off' action="" method='Post'>
            <h2> Singn Up</h2>
          <input type="text"  value={uservalue.name} name="name" onChange={clickData} placeholder='Enter Your Name' />

       
          <input type="text" autoComplete='off' value={uservalue.email} name='email' onChange={clickData} placeholder='Enter Your Email' />
          
          <input type="password" autoComplete='off' value={uservalue.password} name='password' onChange={clickData} placeholder='Enter Your Password' />

          
          <input type="password" autoComplete='off' value={uservalue.reEnterPassword} name='reEnterPassword' onChange={clickData} placeholder='Re Enter Your Password' />

          <Button>Singn Up</Button>
          <div>Or</div>
          <Button>Log In</Button>
        </form>
        </div>
      </>
   
  );
  
}

export default Ragister

