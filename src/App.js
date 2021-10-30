import './App.css';
import axios from 'axios';
import Flag from './components/Flag';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

//How to deploy on GitHub Pages: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://geo.ipify.org/api/v2/country,city?apiKey='+API_KEY+'&ipAddress='
  
  const [loading, setLoading] = useState(false);
  const [ipNum, setIp] = useState('not found');
  const [latlng, setLatlng] = useState([51.505, -0.09]);

  useEffect(() => loadIp(), []);

  const loadIp = async () => {
    setLoading(true);
    const response = await axios.get(url);
    console.log(response);
    setIp(response.data);
    setLatlng([response.data.location.lat, response.data.location.lng]);
    setLoading(false);
  }
  console.log(latlng);



  return (
    <div className="App">
      <h1>What is my IP-address?</h1>
      {loading ?
      <p id="loading">Loading...</p>
      :
      <div className="body">
      <div className="ipField">
        <p  style={{textDecorationLine: 'underline'}}>My IP:</p>
        <p style={{fontWeight: 'bold'}}>{ipNum?.ip}</p>
        <p>{ipNum?.location?.city}</p>
        <p>{ipNum?.location?.region}, {ipNum?.location?.country}</p>
        <p>lat: {ipNum?.location?.lat}</p>
        <p>lng: {ipNum?.location?.lng}</p>
        <img src={`https://flagcdn.com/80x60/${ipNum?.location?.country.toLowerCase()}.png`} srcset={`https://flagcdn.com/h40/${ipNum?.location?.country?.toLowerCase()}.png 2x,
        https://flagcdn.com/h60/${ipNum?.location?.country.toLowerCase()}.png 3x`} alt="flag" />
      </div>
      <MapContainer center={latlng} zoom={15} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={latlng} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
    <Popup>
      You are here <br />
    </Popup>
  </Marker>
</MapContainer>
</div>
      }
    </div>
  );
}

export default App;

