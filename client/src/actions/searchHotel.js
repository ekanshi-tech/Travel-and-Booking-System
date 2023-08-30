// import * as types from './type';
import {searchHotelApi} from '../api/api.js';

export const searchRequest = () => ({
    type: "SEARCH_REQUEST",
    // payload:
});

export const searchFailure = (error) => ({
    type: "SEARCH_FAILURE",
    payload: error
});

export const searchSuccess = (hotels) => ({
    type: "SEARCH_SUCCESS",
    payload: hotels
});

export const searchHotel = (searchData) => async(dispatch) =>{

    console.log('search hotel');
    console.log(searchData);
    try{
        dispatch(searchRequest());
        const hotels=await searchHotelApi(searchData);
        dispatch(searchSuccess(hotels));
    }
    catch(error){
        dispatch(searchFailure(error));
    }
}



