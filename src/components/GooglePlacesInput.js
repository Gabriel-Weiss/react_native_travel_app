import React from "react";
import { GOOGLE_API_KEY } from "@env";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setEndPoint, setStartPoint } from "../redux/appSlice";

export default function GooglePlacesInput() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              borderStyle: "solid",
              borderColor: DefaultTheme.colors.primary,
              backgroundColor: DefaultTheme.colors.primaryContainer,
              borderWidth: 2,
            },
          }}
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setStartPoint({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setEndPoint(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          enablePoweredByContainer={false}
        />
      </View>
    </SafeAreaView>
  );
}
