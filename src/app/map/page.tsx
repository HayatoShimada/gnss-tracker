import dynamic from "next/dynamic";

// Google Maps は SSR に対応していないため、クライアントサイドでのみ読み込む
const MapPage = dynamic(() => import("../components/MapPage"), { ssr: false });

export default function Map() {
  return <MapPage />;
}
