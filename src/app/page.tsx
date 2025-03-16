"use client";

import { useState, useEffect } from "react";
import { getRecentLocations, LocationData } from "@/lib/getLocation";
import Link from "next/link";

export default function Home() {
  const [latestLocation, setLatestLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecentLocations();
      if (data.length > 0) {
        setLatestLocation(data[0]); // 最新の位置情報を取得
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 15000); // 15秒ごとに更新

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">GNSS Location Tracker</h1>

      {latestLocation ? (
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Latest Location</h2>
          <p>Latitude: {latestLocation.latitude}</p>
          <p>Longitude: {latestLocation.longitude}</p>
          <p className="text-gray-500 text-sm">Updated at: {new Date(latestLocation.timestamp.toDate()).toLocaleString()}</p>
        </div>
      ) : (
        <p className="text-gray-500">Fetching location...</p>
      )}

      <Link href="/map">
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
          View on Map
        </button>
      </Link>
    </main>
  );
}
