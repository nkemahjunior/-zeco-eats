'use client'

import { useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet'
import L, { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useLocationStore } from '@/stores/globalStore'

// Fix Leaflet default marker icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function StoreMap({
  restaurantLat,
  restaurantLon,
}: {
  restaurantLat: number
  restaurantLon: number
}) {
  const { userLocation } = useLocationStore()

  const userLatLng: LatLngTuple = userLocation
    ? [userLocation.lat, userLocation.lon]
    : [4.1528, 9.2409] // Fallback: Buea center

  const restaurantLatLng: LatLngTuple = [restaurantLat, restaurantLon]

  // Line coordinates
  const linePositions: LatLngTuple[] = [userLatLng, restaurantLatLng]

  // Component to adjust map bounds and calculate distance
  const MapAdjuster = () => {
    const map = useMap()

    // Fit map to bounds of user and restaurant
    useEffect(() => {
      const bounds = L.latLngBounds(userLatLng, restaurantLatLng)
      map.fitBounds(bounds, { padding: [50, 50] }) // Add padding for visibility
    }, [map])

    // Calculate distance (in kilometers)
    const distance = map.distance(userLatLng, restaurantLatLng) / 1000 // Convert meters to km

    return (
      <Popup position={linePositions[1]} autoClose={false} closeOnClick={false}>
        Distance: {distance.toFixed(2)} km
      </Popup>
    )
  }

  return (
    <div className="h-full w-full">
      <MapContainer
        center={userLatLng} // Initial center on user location
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        // Disable all interactions
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User Marker */}
        <Marker position={userLatLng}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Restaurant Marker */}
        <Marker position={restaurantLatLng}>
          <Popup>Restaurant</Popup>
        </Marker>

        {/* Line between user and restaurant */}
        <Polyline positions={linePositions} color="blue" weight={3} />

        {/* Adjust map bounds and show distance */}
        <MapAdjuster />
      </MapContainer>
    </div>
  )
}
