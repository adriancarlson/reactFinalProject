import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ShipForm = ({ ship, onDeleteShip, onUpdateShip }) => {
	const [titleValue, setTitleValue] = useState(ship.title);
	const [nameValue, setNameValue] = useState(ship.name);
	const [pilotValue, setPilotValue] = useState(ship.pilot);
	const [factionValue, setFactionValue] = useState(ship.faction);
	const handleTitleChange = (e) => setTitleValue(e.target.value);
	const handleNameChange = (e) => setNameValue(e.target.value);
	const handlePilotChange = (e) => setPilotValue(e.target.value);
	const handleFactionChange = (e) => setFactionValue(e.target.value);

	const handleSave = () => {
		onUpdateShip(ship, { title: titleValue, name: nameValue, pilot: pilotValue, faction: factionValue });
	};

	return (
		<React.Fragment>
			<div className='row'>
				<div className='col d-flex'>
					<input type='text' id='titleInput' className='form-control' value={titleValue} onChange={handleTitleChange} />
					<Button variant='danger' className='ms-2 text-nowrap' onClick={() => onDeleteShip(ship)}>
						Delete Ship
					</Button>
					<Button variant='primary' className='ms-2 text-nowrap' onClick={handleSave}>
						Save Ship
					</Button>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label for='nameInput' className='form-label mt-3'>
						Name:
					</label>
					<input type='text' id='nameInput' className='form-control' value={nameValue} onChange={handleNameChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label for='pilotInput' className='form-label mt-3'>
						Pilot:
					</label>
					<input type='text' id='pilotInput' className='form-control' value={pilotValue} onChange={handlePilotChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label for='factionInput' className='form-label mt-3'>
						Faction:
					</label>
					<input type='text' id='factionInput' className='form-control' value={factionValue} onChange={handleFactionChange} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default ShipForm;
