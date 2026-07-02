import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-3xl font-bold text-center">
        Map App
      </Text>

      <Text className="mt-3 text-gray-600 text-center">
        A React Native Expo App using react-native-map and expo-location
      </Text>
    </View>
  );
}