import React from 'react';

const NotFound = () => {
	return (
		<div className='container-fluid mt-3 mx-3'>
			<div className='row'>
				<div className='col text-center'>
					<h2 className='mb-4'>No Ships to be found!</h2>
					<p>Sorry but you typed the wrong coordinates into your Navi-computer. Fleet not found!</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
