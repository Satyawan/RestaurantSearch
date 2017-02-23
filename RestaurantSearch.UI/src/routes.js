import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import RestaurantSearchPage from './components/restaurants/RestaurantSearchPage';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={RestaurantSearchPage} />
    </Route>
       
);