import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';
import TextInput from '../common/TextInput';
import RestaurantList from './RestaurantList';
import SearchForm from '../search/SearchForm';

class RestaurantSearchPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            zip:'',
            errors:{}
        };

        this.onZipChange = this.onZipChange.bind(this);
        this.searchRestaruant = this.searchRestaruant.bind(this);
    }

    onZipChange(event){
        if(event.target.value.length < 5){
            
        }
        this.setState({zip:event.target.value});
    }

    searchRestaruant(event){
        event.preventDefault;
        this.props.actions.loadRestaurant(this.state.zip);
    }

    render(){
        const {restaurants} = this.props;
        return(
            <div> 
                <h1> Restaurants </h1>
                 <SearchForm 
                    onChange={this.onZipChange}
                    onSearch={this.searchRestaruant}
                     />
                <RestaurantList restaurants={restaurants} />
            </div>
        );
    }
}

RestaurantSearchPage.propTypes = {
    restaurants: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

RestaurantSearchPage.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state, ownProps){
    return{
        restaurants: state.restaurants
    };
}

function mapDispatchToProps(dispatch){
    return{
            actions: bindActionCreators(restaurantActions,dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearchPage);