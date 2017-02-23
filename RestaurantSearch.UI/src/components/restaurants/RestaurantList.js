import React, {PropTypes} from 'react';
import RestaurantListRow from './RestaurantListRow';

const RestaurantList = ({restaurants}) => {
    return (
       
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Zip</th>
                    <th>Address</th>
                    
                </tr>
            </thead>
            <tbody>
                {restaurants.map(restaurant =>
                    <RestaurantListRow restaurant={restaurant}/>
                )}
            </tbody>
        </table>
    );
};

RestaurantList.propTypes = {
    restaurants: PropTypes.array.isRequired
};

export default RestaurantList;