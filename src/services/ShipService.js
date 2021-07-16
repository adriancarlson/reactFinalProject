const SHIP_ENDPOINT = 'https://crudcrud.com/api/6099a1633ca44bbd9bf1aff06e272da9/ships';

const getFetchOptions = (method, data) => ({
	method: method,
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(data),
});

export const getShips = async () => {
	try {
		const resp = await fetch(SHIP_ENDPOINT);
		return await resp.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const createShip = async (shipData) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT, getFetchOptions('POST', shipData));
		return await resp.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const updateShip = async (shipId, shipData) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT + '/' + shipId, getFetchOptions('PUT', shipData));
		return resp;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const deleteShip = async (shipId) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT + '/' + shipId, { method: 'DELETE' });
		return resp;
	} catch (e) {
		console.log(e);
		return null;
	}
};
