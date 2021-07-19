import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { getShips } from '../services/ShipService';
import Ship from './Ship';

const ShipList = () => {
	const match = useRouteMatch();

	const [ships, setShips] = useState([]);

	const reloadShips = async () => {
		const freshShips = await getShips();
		setShips(freshShips ? freshShips : []);
	};
	useEffect(() => {
		reloadShips();
	}, []);

	const getShipById = (shipId) => {
		console.log(shipId);
		return ships.find((s) => s._id === shipId);
	};

	return (
		<React.Fragment>
			<div className='sidebar inner-sidebar p-3'>
				<div className='position-sticky pt-2'>
					<div className='d-grid'>
						<Button variant='warning' className='mb-3 float-end'>
							+ New Ship
						</Button>
					</div>
					<Nav variant='pills' className='flex-column'>
						{ships.map((ship) => (
							<Nav.Item key={ship._id}>
								<Nav.Link as={NavLink} to={`${match.url}/${ship._id}`}>
									{ship.title}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</div>
			</div>
			<div className='main inner-main px-2'>
				<Switch>
					<Route path={`${match.url}/:shipId`}>
						<Ship getShipById={getShipById} />
					</Route>
					<Route path={`${match.url}`}>
						<p className='m-3 mt-5 text-center'>Please select a Ship to view details.</p>
					</Route>
				</Switch>
			</div>
		</React.Fragment>
	);
};

export default ShipList;
