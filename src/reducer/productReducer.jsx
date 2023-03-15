const productReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoding: true,
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((currElm) => {
                return currElm.featured === true;
            });

            return {
                ...state,
                isLoding: false,
                product: action.payload,
                featureProduct: featureData,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoding: false,
                isError: true,
            };


        case "SET_SINGLE_LODING":
            return {
                ...state,
                isSingleLoding: true,

            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoding: false,
                singleProduct: action.payload,

            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoding: false,
                isError: true,

            };


        default:
            return state;
    }


};

export default productReducer
