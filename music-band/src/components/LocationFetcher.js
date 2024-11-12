import React, { useEffect } from 'react';
import { fetchGeoLocation } from '../services/geoLocationService';

const LocationFetcher = ({ setCity }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => setCity(data.address.city || ''));
        },
        async () => {
          const geoData = await fetchGeoLocation();
          if (geoData) setCity(geoData.city);
        }
      );
    }
  }, [setCity]);

  return null;
};

export default LocationFetcher;
