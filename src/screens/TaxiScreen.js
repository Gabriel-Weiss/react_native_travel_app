import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Map from "../components/Map";
import NavigationCard from "../components/NavigationCard";
import DriveOptionsCard from "../components/DriveOptionsCard";

export default function TaxiScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "50%" }}>
        <Map />
      </View>
      <View style={{ height: "50%" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DriveOptionsCard"
            component={DriveOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
