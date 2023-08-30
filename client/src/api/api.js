import axios from "axios";

const APIKEY='2878d36ceemsh38f19b12cf76ea0p1f8fc3jsn027f98db6c4e';
const APIURL='https://apidojo-booking-v1.p.rapidapi.com/';

const api=axios.create({
    baseURL:APIURL,
    headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
      },
});

var guest;
var checkOutDate;
var checkInDate;
export const searchHotelApi = async(searchData) =>{
    console.log('api');
        var location=searchData.location
        console.log(location);
        checkInDate=searchData.checkInDate
        console.log(checkInDate);
        checkOutDate=searchData.checkOutDate
        console.log(checkOutDate);
        guest=searchData.guest
        console.log(guest);
    console.log('api');
    try{
        console.log('inside try');
        const response= await api.get('locations/auto-complete',{
            params:{
                text:location
            }
        })
        console.log('outside loc');
        console.log(response);
        const locationId=response.data[0].dest_id;
        console.log('location');
        console.log(locationId);

        const searchResponse=await api.get('properties/list',{
            params:{
                dest_ids:locationId,
                offset:0,
                room_qty:1,
                arrival_date:checkInDate,
                departure_date:checkOutDate,
                guest_qty:guest,
            },
        });
        console.log('api fetch');
        console.log(searchResponse);
        console.log(searchResponse.data.result);
        return searchResponse.data.result;
    }
    catch(e){
        console.log('inside catch')
        throw(e);
    }
}

export const fetchDetailsApi = async(id) =>{
    console.log('id');
    console.log(id);

    try{
        console.log('inside try');

        const detailsResponse=await api.get('properties/detail',{
            params:{
                hotel_id:id,
                rec_room_qty:1,
                rec_guest_qty:guest,
                departure_date:checkOutDate,
                arrival_date:checkInDate,
                search_id:id

            }
        })

        console.log('api fetch');
        console.log(detailsResponse);
        console.log(detailsResponse.data);
        return detailsResponse.data;
    }
    catch(e){
        console.log('inside catch');
        throw(e);
    }
}
