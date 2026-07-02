import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator, View } from "react-native";
import { useUserLocation } from "@/hooks/useUserLocation";
import { devices } from "@/constants/data";

export default function MapScreen() {
  const { location, loading } = useUserLocation();

  if (loading || !location) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;

  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation
      showsMyLocationButton
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {devices.map((device) => (
        <Marker
          key={device.id}
          title={device.name}
          description={`Device ID: ${device.id}`}
          coordinate={{
            latitude: device.latitude,
            longitude: device.longitude,
          }}
        />
      ))}
    </MapView>
  );
}