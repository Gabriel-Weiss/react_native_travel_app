import { FlatList, StyleSheet, View } from "react-native";
import {
  Text,
  Button,
  MD3LightTheme as DefaultTheme,
  TouchableRipple,
  List,
  MD3Colors,
} from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTime } from "../redux/appSlice";

const data = [
  {
    id: 1,
    title: "Standard",
    taxes: 1,
    image: require("../../assets/standart.png"),
  },
  {
    id: 2,
    title: "Transport",
    taxes: 2,
    image: require("../../assets/transport.png"),
  },
  {
    id: 3,
    title: "VIP",
    taxes: 3,
    image: require("../../assets/vip.png"),
  },
];

export default function DriveOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();
  const travelTime = useSelector(selectTravelTime);

  const renderItem = ({ item }) => (
    <TouchableRipple style={{ margin: 5 }} onPress={() => setSelected(item)}>
      <List.Item
        style={{ borderColor: MD3Colors.primary40, borderWidth: 1 }}
        title={() => (
          <>
            <Text variant="bodyLarge">{item.title}</Text>
            <Text variant="bodySmall">{travelTime?.duration?.text} timp</Text>
          </>
        )}
        right={() => (
          <Text variant="bodyLarge">
            {(travelTime?.duration.value * item.taxes) / 100} lei
          </Text>
        )}
        left={() => (
          <List.Image source={item.image} style={{ resizeMode: "contain" }} />
        )}
      />
    </TouchableRipple>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: DefaultTheme.colors.onPrimary,
      }}
    >
      <Text
        variant="headlineLarge"
        style={{ textAlign: "center", textAlignVertical: "top" }}
      >
        Select a ride - {travelTime?.distance?.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <TouchableRipple disabled={!selected}>
          <Text
            variant="bodyMedium"
            style={{
              backgroundColor: MD3Colors.primary60,
              color: "white",
              width: 200,
              padding: 5,
              borderRadius: 5,
            }}
          >
            Your ride: {selected?.title}
          </Text>
        </TouchableRipple>
        <Button
          icon="keyboard-return"
          mode="contained"
          style={{
            alignSelf: "flex-end",
            marginVertical: 5,
          }}
          color={DefaultTheme.colors.primary}
          onPress={navigation.goBack}
        >
          Back
        </Button>
      </View>
    </View>
  );
}
