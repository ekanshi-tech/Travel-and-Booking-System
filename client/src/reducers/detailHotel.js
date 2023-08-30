const initialState={
    hotelDetails:null,
    error:null,
    loading:false
}

const hotelDetailReducer=(state=initialState,action) => {
    console.log('reducer');
    switch(action.type){
        case 'DETAIL_REQUEST':
            return{...state,
                loading:true,
                error:null
            }
        
        case 'DETAIL_FAILURE':
            return{...state,
                loading:false,
                error:action.payload
            }

        case 'DETAIL_SUCCESS':
            return{...state,
                hotelDetails:action.payload,
                loading:false,
                error:null
            }
        
        default:
            return state;
    }
}

export default hotelDetailReducer;