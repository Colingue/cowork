'use client';

import { Map, Overlay, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Home } from 'lucide-react';

export default function MapDetail({ addressName }: { addressName: string }) {
  const markerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    mapRef.current = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-74.006, 40.7128]),
        zoom: 16
      })
    });

    const overlay = new Overlay({
      position: fromLonLat([-74.006, 40.7128]), // Positionner à New York
      positioning: 'bottom-center',
      element: markerRef.current ?? undefined,
      stopEvent: true
    });

    // Ajouter l'overlay à la carte après le rendu
    mapRef.current.addOverlay(overlay);

    return () => {
      mapRef.current?.setTarget(undefined);
    };
  }, []);

  return (
    <div className='mb-8'>
      <p className='font-medium text-xl mb-6'>Où se situe le logement</p>
      <p className='font-medium mb-6 text-gray-500'>{addressName}</p>
      <div id='map' className='h-96 w-full rounded-lg overflow-hidden'>
        <div
          ref={markerRef}
          className='bg-blue-700 p-3 rounded-full '
          id='icon-home'
        >
          <Home color='white' />
        </div>
      </div>
    </div>
  );
}
