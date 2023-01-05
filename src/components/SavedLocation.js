import { FlatList, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  TouchableRipple,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import React from "react";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Southwark, London, UK",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "Job",
    destination: "Trafalgar Square, Trafalgar Square, London, UK",
  },
];

const renderItem = ({ item }) => (
  <TouchableRipple
    style={{
      flexDirection: "row",
      backgroundColor: DefaultTheme.colors.primaryContainer,
      padding: 5,
      borderRadius: 5,
      marginVertical: 3,
    }}
    rippleColor={DefaultTheme.colors.primary}
  >
    <>
      <FontAwesome
        name={item.icon}
        size={24}
        style={{
          borderRadius: 50,
          padding: 5,
          backgroundColor: DefaultTheme.colors.onSecondary,
        }}
        color={DefaultTheme.colors.primary}
      />
      <View style={{ paddingLeft: 5 }}>
        <Text variant="labelLarge">{item.location}</Text>
        <Text variant="labelMedium">{item.destination}</Text>
      </View>
    </>
  </TouchableRipple>
);

export default function SavedLocation() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}
