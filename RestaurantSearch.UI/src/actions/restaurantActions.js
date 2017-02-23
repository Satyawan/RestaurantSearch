import * as types from './actionTypes';
import restaurantApi from '../api/RestaurantApi';

export function loadRestaurantSuccess(restaurants){
    return {type: types.LOAD_RESTAURANTS_SUCCESS, restaurants};
}

export function loadRestaurant(zip){
    return function(dispatch){
        return restaurantApi.getRestaurantsByZip(zip).then(restaurants=>{
            dispatch(loadRestaurantSuccess(restaurants));
        });
    };
}
