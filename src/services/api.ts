import axios from 'axios';

export const getVehiclePositions = async () => {
	try {
		return await axios.get('http://localhost:3000/positions');
	} catch (e) {
		throw e;
	}
};