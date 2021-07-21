import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ShipForm = ({ ship, onDeleteShip, onUpdateShip }) => {
	const [titleValue, setTitleValue] = useState(ship.title);
	const [nameValue, setNameValue] = useState(ship.name);
	const [pilotValue, setPilotValue] = useState(ship.pilot);
	const [factionValue, setFactionValue] = useState(ship.faction);
	const [iconValue, setIconValue] = useState(ship.icon);
	const handleTitleChange = (e) => setTitleValue(e.target.value);
	const handleNameChange = (e) => setNameValue(e.target.value);
	const handlePilotChange = (e) => setPilotValue(e.target.value);
	const handleFactionChange = (e) => setFactionValue(e.target.value);
	const handleIconChange = (e) => setIconValue(e.target.value);

	const handleSave = () => {
		onUpdateShip(ship, { title: titleValue, name: nameValue, pilot: pilotValue, faction: factionValue, icon: iconValue });
	};

	return (
		<React.Fragment>
			<div className='row'>
				<div className='col'>
					<label htmlFor='titleInput' className='form-label mt-3'>
						Title:
					</label>
					<input type='text' id='titleInput' className='form-control' value={titleValue} onChange={handleTitleChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label htmlFor='nameInput' className='form-label mt-3'>
						Name:
					</label>
					<input type='text' id='nameInput' className='form-control' value={nameValue} onChange={handleNameChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label htmlFor='pilotInput' className='form-label mt-3'>
						Pilot:
					</label>
					<input type='text' id='pilotInput' className='form-control' value={pilotValue} onChange={handlePilotChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label htmlFor='factionInput' className='form-label mt-3'>
						Faction:
					</label>
					<input type='text' id='factionInput' className='form-control' value={factionValue} onChange={handleFactionChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<label htmlFor='iconInput' className='form-label mt-3'>
						<span className='icon-size me-3'>
							<i className={`xwing-miniatures-ship xwing-miniatures-ship-${ship.icon}`}></i>
						</span>Icon:
					</label>
					<input type='text' id='iconInput' className='form-control' value={iconValue} onChange={handleIconChange} />
				</div>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<Button variant='primary' className='ms-2 text-nowrap float-end' onClick={handleSave}>
						Save Ship
					</Button>
					<Button variant='danger' className='ms-2 text-nowrap float-end' onClick={() => onDeleteShip(ship)}>
						Delete Ship
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ShipForm;
