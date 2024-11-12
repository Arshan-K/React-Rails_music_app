import React, { useState, useEffect } from 'react';
import LocationFetcher from './components/LocationFetcher';
import SearchBar from './components/SearchBar';
import BandList from './components/BandList';
import { fetchBandsByCity } from './services/musicBrainzService';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [bands, setBands] = useState([]);

  const handleSearch = async (searchCity) => {
    const fetchedBands = await fetchBandsByCity(searchCity);
    setBands(fetchedBands);
  };

  useEffect(() => {
    if (city) handleSearch(city);
  }, [city]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Music Band Finder</h1>
        <p>Discover bands in your city!</p>
      </header>
      <div className="search-container">
        <LocationFetcher setCity={setCity} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <BandList bands={bands} />
    </div>
  );
}

export default App;
