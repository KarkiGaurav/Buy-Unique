import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context/productContext'
import { FilterContextProvider } from "./context/filterContext";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppProvider>
     <FilterContextProvider>
        <App />
     </FilterContextProvider>
   </AppProvider>
   
  </React.StrictMode>,
)
