"use client";

import { useState, useEffect } from "react";
import { getRecentLocations, LocationData } from "@/lib/getLocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 35.6895, // 初期位置（東京）
  lng: 139.6917,
};

export default function MapPage() {
  const [locations, setLocations] = useState<LocationData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecentLocations();
      setLocations(data);
    }

    fetchData();
    const interval = setInterval(fetchData, 15000); // 15秒ごとに更新

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <h1 className="text-2xl font-bold mb-4">Recent GNSS Locations</h1>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {locations.map((loc, index) => (
          <Marker key={index} position={{ lat: loc.latitude, lng: loc.longitude }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
