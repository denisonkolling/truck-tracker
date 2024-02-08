import { useState, useEffect } from 'react';
import { Loader, Content } from './styles';
import Map from '../../components/Map';
import { getVehiclePositions } from '../../services/api.js';

const VehiclesMap = () => {
	const [positions, setPositions] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		getVehiclePositions()
			.then((res) => {
				setPositions(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Content>
			{loading || !positions ? (
				<Loader></Loader>
			) : (
				<>
					<Map
						positions={positions}
						center={
							positions[0]
								? [positions[0].latitude, positions[0].longitude]
								: [-27.5961, -48.5651]
						}
					/>
				</>
			)}
		</Content>
	);
};

export default VehiclesMap;