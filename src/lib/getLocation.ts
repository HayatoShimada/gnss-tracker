import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

export type LocationData = {
  latitude: number;
  longitude: number;
  timestamp: Timestamp;
};

export async function getRecentLocations(): Promise<LocationData[]> {
  const oneHourAgo = new Date();
  oneHourAgo.setHours(oneHourAgo.getHours() - 1);

  const locationsRef = collection(db, "locations");
  const q = query(locationsRef, where("timestamp", ">=", oneHourAgo));
  const querySnapshot = await getDocs(q);

  const locations: LocationData[] = [];
  querySnapshot.forEach((doc) => {
    locations.push(doc.data() as LocationData);
  });

  return locations;
}
