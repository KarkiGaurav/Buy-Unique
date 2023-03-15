import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from "../reducer/productReducer"   //here is reducer == ProductReducer
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";  //this is just for trying it is not  Api for our projrct.
// const API = "https://buy-unique.up.railway.app/api/product";

const initialState = {
    isLoding: false,
    isError: false,
    product: [],
    featureProduct: [],
    isSingleLoding: false,
    singleProduct: {},
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (url) => {

        dispatch({type: "SET_LOADING"});

        try {
            const res = await axios.get(url);
            const product = await res.data;
            // const product =   productR.myData;
            // console.log(product);

            dispatch({ type: "SET_API_DATA", payload: product })
        } catch (err) {
            dispatch({type: "API_ERROR"});
        }
    };

    // this is for the Single product page.
    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LODING"});
        try{
            const res = await axios.get(url);
        const singleProduct = await res.data;
        //  const singleProduct = singleProductR.myData;
         
        // console.log(singleProduct);

        dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
    }catch(err){
        dispatch({type: "SET_SINGLE_ERROR"});
      }
    };



    useEffect(() => {
        getProduct(API)
    }, []);

    return (
        <AppContext.Provider value= {{ ...state , getSingleProduct}} >
            {children}
        </AppContext.Provider>
    );

};

// this is custom Hooks
const useProductContext = () => {
    return useContext(AppContext);
};


export { AppProvider, AppContext, useProductContext }