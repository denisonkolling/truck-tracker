import { useState, useEffect } from 'react';
import { Loader, Content } from './styles';
import Map from '../../components/Map';
import { getVehiclePositions } from '../../services/api.js';

const VehiclesMap = () => {

    interface IPosition {
      id: number;
      datetime: string;
      license_plate: string;
      latitude: number;
      longitude: number;
      ignition: boolean;
      speed: number;
    }

  	const [positions, setPositions] = useState<IPosition[]>([]);
  	const [loading, setLoading] = useState(false);

  	useEffect(() => {
      setLoading(true);
  		init();
      setLoading(false);
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
          ? { latitude: positions[0].latitude, longitude: positions[0].longitude }
          : { latitude: -27.5961, longitude: -48.5651 }
      }
    />
  </>
)}
		</Content>
	);
};

export default VehiclesMap;