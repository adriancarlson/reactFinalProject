import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useRouteMatch } from 'react-router-dom';

const ShipView = ({ ship }) => {
	const match = useRouteMatch();

	return (
		<React.Fragment>
			<div className='row'>
				<div className='col'>
					<h2>
						<span className='icon-size me-3'>
							<i className={`xwing-miniatures-ship xwing-miniatures-ship-${ship.icon}`}></i>
						</span>
						{ship.title}
					</h2>
				</div>
				<div className='col-3'>
					<Button variant='warning' as={Link} to={match.url + '/edit'} className='float-end'>
						Edit
					</Button>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<p className='note-text-display mt-2'>{ship.name}</p>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<p className='note-text-display mt-2'>{ship.pilot}</p>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<p className='note-text-display mt-2'>{ship.faction}</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ShipView;
