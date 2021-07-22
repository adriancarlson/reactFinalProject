import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { getShips, createShip, deleteShip, updateShip } from '../services/ShipService';
import Ship from './Ship';

const ShipList = () => {
	const match = useRouteMatch();
	const history = useHistory();

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

	const handleCreateShip = async () => {
		const ship = await createShip({ title: 'New Ship', name: '', pilot: '', faction: '', icon: '' });
		await reloadShips();
		history.push(`/all/${ship._id}/edit`);
	};

	const handleDeleteShip = async (ship) => {
		await deleteShip(ship._id);
		await reloadShips();
		history.push(`/all`);
	};

	const handleUpdateShip = async (ship, newData) => {
		await updateShip(ship._id, { ...newData });
		await reloadShips();
		history.push(`/all/${ship._id}`);
	};

	return (
		<React.Fragment>
			<div className='sidebar inner-sidebar p-3'>
				<div className='position-sticky pt-2'>
					<div className='d-grid'>
						<Button variant='warning' className='mb-3 float-end p-0 font-weight-bold' onClick={handleCreateShip}>
							+ New Ship
							<span className='icon-size mx-1'>
								<i className='xwing-miniatures-font xwing-miniatures-font-title'></i>
							</span>
						</Button>
					</div>
					<Nav variant='pills' className='flex-column'>
						{ships.map((ship) => (
							<Nav.Item key={ship._id}>
								<Nav.Link as={NavLink} to={`${match.url}/${ship._id}`}>
									<span className='icon-size me-4'>
										<i className={`xwing-miniatures-ship xwing-miniatures-ship-${ship.icon}`}></i>
									</span>
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
						<Ship getShipById={getShipById} onDeleteShip={handleDeleteShip} onUpdateShip={handleUpdateShip} />
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
