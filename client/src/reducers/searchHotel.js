const initialState={
    hotels:[],
    loading:false,
    error:null
};
const searchHotelReducer = (state=initialState,action) =>{
    console.log('reducer');
    switch(action.type){
        case 'SEARCH_REQUEST':
            return {...state,
                    loading:true,
                    error:null};
        case 'SEARCH_FAILURE':
            return{...state,
                    loading:false,
                    error:action.payload
            };
        case 'SEARCH_SUCCESS':
            return{...state,hotels:action.payload,
                    loading:false,
                    error:null
            };
        default:
            return state;
    }
}
export default searchHotelReducer;