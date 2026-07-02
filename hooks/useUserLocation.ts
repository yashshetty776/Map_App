import * as Location from "expo-location";
import { useEffect, useState } from "react";

export function useUserLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setLoading(false);
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync();

    setLocation(currentLocation);
    setLoading(false);
  }

  return { location, loading };
}