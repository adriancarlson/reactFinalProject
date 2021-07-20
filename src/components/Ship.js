import React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';

const Ship = ({ getShipById }) => {
	const match = useRouteMatch();
	const { shipId } = useParams();

	const ship = getShipById(shipId);

	return (
		<div className='container mt-3'>
			{!ship ? (
				<Redirect to='/notfound' />
			) : (
				<Switch>
					<Route path={`${match.path}/edit`}>Ship Form</Route>
					<Route path={`${match.path}`}>Ship</Route>
				</Switch>
			)}
		</div>
	);
};

export default Ship;
