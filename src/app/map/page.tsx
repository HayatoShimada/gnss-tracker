"use client";

import dynamic from "next/dynamic";

// クライアントコンポーネントとして MapPage を読み込む
const MapPage = dynamic(() => import("../components/MapPage"), { ssr: false });

export default function Map() {
  return <MapPage />;
}
