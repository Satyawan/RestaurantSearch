import React, {PropTypes} from 'react';


const RestaurantListRow = ({restaurant}) => {
    
    return(
        <tr>
            <td> {restaurant.Name}</td>
            <td> {restaurant.Zip}</td>
            <td> {restaurant.Address}</td>
        </tr>
    );

};

RestaurantListRow.propTypes = {
    restaurant: PropTypes.object.isRequired
};

export default RestaurantListRow;