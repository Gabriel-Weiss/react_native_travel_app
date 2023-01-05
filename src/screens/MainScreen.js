import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, FlatList } from "react-native";
import { MD3LightTheme as DefaultTheme, Text } from "react-native-paper";

import MainCard from "../components/MainCard";
import GooglePlacesInput from "../components/GooglePlacesInput";
import SavedLocation from "../components/SavedLocation";

const data = [
  {
    id: 1,
    title: "Order a ride",
    image: require("../../assets/deliver_me.png"),
    screen: "Taxi",
  },
  {
    id: 2,
    title: "Order food",
    image: require("../../assets/deliver_food.png"),
    screen: "Deliver",
  },
];

const renderItem = ({ item }) => (
  <MainCard
    id={item.id}
    title={item.title}
    image={item.image}
    screen={item.screen}
  />
);

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.options}>
        <Text variant="displayMedium">Our Services</Text>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <GooglePlacesInput />
      <SavedLocation />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: DefaultTheme.colors.background,
  },
  options: {
    alignItems: "center",
  },
});
