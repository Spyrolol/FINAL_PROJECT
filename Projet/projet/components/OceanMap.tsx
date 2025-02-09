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
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-66, 10], [-60, 10], [-60, 15], [-66, 15], [-66, 10]]]
          },
          "properties": {
            "name": "Eaux tropicales",
            "color": "#00F",
            "description": "Les eaux tropicales sont chaudes et riches en vie, abritant une grande diversité d'espèces marines."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-60, 5], [-55, 5], [-55, 10], [-60, 10], [-60, 5]]]
          },
          "properties": {
            "name": "Récifs coralliens",
            "color": "#FF6347",
            "description": "Les récifs coralliens sont des écosystèmes cruciaux pour la biodiversité marine, soutenant des milliers d'espèces."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[120, -60], [125, -60], [125, -55], [120, -55], [120, -60]]]
          },
          "properties": {
            "name": "Grande barrière de corail",
            "color": "#32CD32",
            "description": "La Grande Barrière de Corail est l'un des écosystèmes les plus célèbres, connue pour sa biodiversité."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-80, -40], [-75, -40], [-75, -35], [-80, -35], [-80, -40]]]
          },
          "properties": {
            "name": "Plaines abyssales",
            "color": "#8A2BE2",
            "description": "Les plaines abyssales sont des régions profondes et plates du fond marin, abritant des espèces uniques adaptées à la pression extrême."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-100, 20], [-90, 20], [-90, 25], [-100, 25], [-100, 20]]]
          },
          "properties": {
            "name": "Crête médio-atlantique",
            "color": "#FFD700",
            "description": "La Crête médio-atlantique est une chaîne de montagnes sous-marines qui s'étend à travers l'océan Atlantique."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-70, 40], [-60, 40], [-60, 45], [-70, 45], [-70, 40]]]
          },
          "properties": {
            "name": "Mer des Sargasses",
            "color": "#D2691E",
            "description": "La Mer des Sargasses est une région de l'océan Atlantique connue pour ses eaux calmes et ses algues flottantes."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[45, 15], [50, 15], [50, 20], [45, 20], [45, 15]]]
          },
          "properties": {
            "name": "Mer Rouge",
            "color": "#FF4500",
            "description": "Mer chaude et peu profonde, la Mer Rouge est célèbre pour ses récifs coralliens et sa biodiversité marine."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-50, -10], [-40, -10], [-40, -5], [-50, -5], [-50, -10]]]
          },
          "properties": {
            "name": "Îles Galápagos",
            "color": "#7FFF00",
            "description": "Les Îles Galápagos sont célèbres pour leur biodiversité unique et leurs espèces endémiques."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-20, -35], [-10, -35], [-10, -30], [-20, -30], [-20, -35]]]
          },
          "properties": {
            "name": "Gyre du Pacifique Sud",
            "color": "#8B0000",
            "description": "Le Gyre du Pacifique Sud est un grand système de courants océaniques rotatifs connu pour ses débris marins."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[-110, 10], [-100, 10], [-100, 15], [-110, 15], [-110, 10]]]
          },
          "properties": {
            "name": "Archipel d'Hawaï",
            "color": "#1E90FF",
            "description": "Les Îles Hawaï sont une chaîne volcanique dans l'océan Pacifique avec une vie marine riche."
          }
        }
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
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        maxZoom={6}
        style={{ height: '1000px', width: '100%' }}
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
