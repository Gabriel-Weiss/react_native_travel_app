import { SafeAreaView, StyleSheet, View } from "react-native";
import { GOOGLE_API_KEY } from "@env";
import {
  Text,
  Button,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setEndPoint } from "../redux/appSlice";
import { useNavigation } from "@react-navigation/native";

import SavedLocation from "./SavedLocation";

export default function NavigationCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineLarge" style={styles.label}>
        Where do you want to go?
      </Text>
      <View>
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          placeholder="Search"
          fetchDetails={true}
          debounce={400}
          minLength={2}
          styles={{
            container: {
              flex: 0,
              padding: 5,
              backgroundColor: DefaultTheme.colors.onPrimary,
            },
            textInput: {
              backgroundColor: DefaultTheme.colors.primaryContainer,
              borderRadius: 5,
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setEndPoint({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("DriveOptionsCard");
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <SavedLocation />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <Button
          icon={"car"}
          mode="outlined"
          onPress={() => navigation.navigate("DriveOptionsCard")}
        >
          Tours
        </Button>
        <Button icon={"food"} mode="outlined">
          Orders
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: DefaultTheme.colors.onPrimary, flex: 1 },
  label: {
    padding: 5,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    color: DefaultTheme.colors.onPrimaryContainer,
    backgroundColor: DefaultTheme.colors.primaryContainer,
  },
});
