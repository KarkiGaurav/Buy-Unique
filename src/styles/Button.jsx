import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

        height: 2.5rem;
        max-width: 10rem;
        min-width: 5rem;
        color:white;
        padding: 4px;
        background-color: #5f2f14;
        border: 1px solid-black;
        border-radius: .5rem;
        text-align: center;
        text-decoration:none;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover,
        &:active {
          box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
          ${'' /* width: 8rem; */}
    
  }
`
//   return (
//     <div>
      
//     </div>
//   )
// }

export default Button;
