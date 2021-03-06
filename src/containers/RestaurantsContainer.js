

import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

import  { connect } from 'react-redux'

class RestaurantsContainer extends Component {


	render() {
		return (
			<div>
				<RestaurantInput addRest={this.props.addRest} />
                <Restaurants restaurants={this.props.restaurants} deleteRest={this.props.deleteRest} />
			</div>
		);
	}
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

const mapDispatchToProps = (dispatch) => ({
    addRest: (name) => dispatch({ type: 'ADD_REST', name }),
    deleteRest: (restId) => dispatch({ type: 'DELETE_REST', restId })
});

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer);