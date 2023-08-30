import {fetchDetailsApi} from '../api/api.js';

export const detailRequest = () => ({
    type: "DETAIL_REQUEST",
});

export const detailFailure = (error) => ({
    type: "DETAIL_FAILURE",
    payload: error
});

export const detailSuccess = (details) => ({
    type: "DETAIL_SUCCESS",
    payload: details
});

export const hotelDetailAction = (idData) => async(dispatch) =>{

    console.log('hotel details');
    console.log(idData);
    try{
        dispatch(detailRequest);
        const details=await fetchDetailsApi(idData);
        dispatch(detailSuccess(details));
    }
    catch(error){
        dispatch(detailFailure(error));
    }
}

