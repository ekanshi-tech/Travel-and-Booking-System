import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import searchHotelReducer from "./searchHotel";
import hotelDetailReducer from "./detailHotel";

export default combineReducers({
    authReducer,currentUserReducer,
    hotel:searchHotelReducer,
    detail:hotelDetailReducer

});