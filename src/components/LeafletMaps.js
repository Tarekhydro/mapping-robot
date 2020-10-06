import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; //important to add the css otherwise the map not render so good!!
//import { Icon } from "leaflet";
import L from 'leaflet';

//on fait ca pour avoir le icon sur la carte sinon il est invisible donc ondesactive parametre par defaut
delete L.Icon.Default.prototype._getIconUrl;
//on importe manuellement limage du marker la solution ici => https://github.com/PaulLeCam/react-leaflet/issues/453
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const LeafletMap = ({position, name}) => {
    return (
        <Map center={position} zoom={2}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            {name}
                        </Popup>
                    </Marker>
                </Map>
        )
}

export default LeafletMap;