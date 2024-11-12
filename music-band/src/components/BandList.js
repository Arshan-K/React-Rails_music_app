import React from 'react';

const BandList = ({ bands }) => (
  <div>
    {bands.length > 0 ? (
      bands.map((band, index) => (
        <div key={index}>
          <h3>{band.name}</h3>
          <p>Founded: {band.founded_year || 'Unknown'}</p>
        </div>
      ))
    ) : (
      <p>No bands found.</p>
    )}
  </div>
);

export default BandList;
