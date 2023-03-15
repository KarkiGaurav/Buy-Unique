import React, { useState } from 'react'
import './index.css';
import Button from './styles/Button'

const Login = () => {

    const [uservalue, setvalue] = useState({
       email: "",
       password : ""
    });

    const clickData = (event) => {
        const {name, value}= event.target
        setvalue({
            ...uservalue,
            [name]:value
        })
    }

    

    return (
        <>
            <div className='main-cotainer'>
                <form className='contact-form' action="" method='Post'>
                <h2> Log In</h2>
                    
                    <input type="text" autoComplete='off' value={uservalue.email} name='email' onChange={clickData} placeholder='Enter Your Email'/>
                    
                    <input type="password" autoComplete='off' value={uservalue.password} name='password' onChange={clickData} placeholder='Enter Your password' />
                    
                    <Button>Log In</Button>
                </form>
            </div>
        </>
    )
}

export default Login
