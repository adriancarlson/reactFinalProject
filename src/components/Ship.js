import React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import ShipView from './ShipView';
import ShipForm from './ShipForm';

const Ship = ({ getShipById, onDeleteShip, onUpdateShip }) => {
	const match = useRouteMatch();
	const { shipId } = useParams();

	const ship = getShipById(shipId);

	return (
		<div className='container mt-3'>
			{!ship ? (
				<Redirect to='/notfound' />
			) : (
				<Switch>
					<Route path={`${match.path}/edit`}>
						<ShipForm key={ship._id} ship={ship} onDeleteShip={onDeleteShip} onUpdateShip={onUpdateShip} />
					</Route>
					<Route path={`${match.path}`}>
						<ShipView key={ship._id} ship={ship} />
					</Route>
				</Switch>
			)}
		</div>
	);
};

export default Ship;
