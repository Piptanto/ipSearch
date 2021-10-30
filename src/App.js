import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://geo.ipify.org/api/v2/country?apiKey='+API_KEY+'&ipAddress='
  
  const [ipNum, setIp] = useState('not found');

  useEffect(() => loadIp(), []);

  const loadIp = async () => {

    const response = await axios.get(url);
    console.log(response);

    setIp(response.data);

  }


  return (
    <div className="App">
      <h1>What is my IP-address?</h1>
      <div className="ipField">
        <p  style={{textDecorationLine: 'underline'}}>My IP:</p>
        <p>{ipNum?.ip}</p>
        <p>{ipNum?.location?.country}</p>
        <p>{ipNum?.location?.region}</p>
      </div>
    </div>
  );
}

export default App;
