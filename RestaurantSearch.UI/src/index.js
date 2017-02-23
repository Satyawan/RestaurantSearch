/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadRestaurant} from './actions/restaurantActions';
import './styles/styles.css'; //Webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadRestaurant(''));

render(
    <Provider store={store} >
        <Router routes={routes} />
    </Provider>,
    document.getElementById('app')
);
