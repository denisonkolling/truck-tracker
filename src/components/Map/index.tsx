import { TileLayer } from 'react-leaflet';
import { MapContainerStyled, MarkerStyled, PopupStyled } from './styles';

interface Map {
  positions: Array<{ latitude: number; longitude: number }>;
  center?: string;
}

const Map = ({ positions, center }: { positions: Array<{ latitude: number; longitude: number }> ; center: number }) => {
  
	
  return (
		<MapContainerStyled center={[center, center]} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a
					href="https://www.openstreetmap.org/copyright">&nbsp;OpenStreetMap&nbsp;</a> contributors'
			/>

			{positions.map((vehicle: any, index: number) => {
				return (
					<MarkerStyled
						position={[vehicle.latitude, vehicle.longitude]}
						key={index}>
						<PopupStyled>
							<p>
								<strong>Date</strong> {vehicle.datetime}
								<br />
								<strong>Plate</strong> {vehicle.license_plate}
								<br />
								<strong>Ignition {vehicle.ignition ? 'On' : 'Off'}</strong>
								<br />
								<strong>Speed</strong> {vehicle.speed}
							</p>
						</PopupStyled>
					</MarkerStyled>
				);
			})}
		</MapContainerStyled>
	);
};
export default Map;
