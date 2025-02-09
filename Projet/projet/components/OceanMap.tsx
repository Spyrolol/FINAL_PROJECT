'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Popup } from 'leaflet';

const OceanMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const oceanData = {
      "type": "FeatureCollection",
      "features": [
        // Ton ensemble de données GeoJSON ici...
      ]
    };

    setGeoData(oceanData);
  }, []);

  const onEachFeature = (feature: any, layer: any) => {
    const popupContent = `
      <div style="max-width: 300px;">
        <h3 style="text-align: center;">${feature.properties.name}</h3>
        <p>${feature.properties.description}</p>
      </div>
    `;

    layer.bindPopup(popupContent);
  };

  return (
    <div className="map-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <MapContainer
        center={[0, 0]}  // Centre de la carte
        zoom={3}          // Zoom initial
        minZoom={3}
        maxZoom={6}
        style={{ height: '100%', width: '80%' }} // Taille de la carte
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData && (
          <GeoJSON
            data={geoData}
            onEachFeature={onEachFeature}
            style={(feature) => ({
              color: feature.properties.color,
              weight: 2,
              opacity: 0.5,
              fillOpacity: 0.5,
            })}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default OceanMap;
