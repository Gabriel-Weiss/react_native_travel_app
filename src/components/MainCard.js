import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MD3LightTheme as DefaultTheme, Card } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectStartPoint } from "../redux/appSlice";

export default function MainCard({ id, title, image, screen }) {
  const navigation = useNavigation();
  const startPoint = useSelector(selectStartPoint);
  return (
    <Card style={styles.container}>
      <TouchableOpacity
        disabled={!startPoint}
        onPress={() => navigation.navigate(screen)}
      >
        <Card.Title title={title} />
        <Card.Cover source={image} style={styles.image} />
        <Card.Actions>
          <FontAwesome
            name="arrow-circle-right"
            size={24}
            color={DefaultTheme.colors.primary}
          />
        </Card.Actions>
      </TouchableOpacity>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 150,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: DefaultTheme.colors.elevation.level2,
  },
  image: {
    backgroundColor: DefaultTheme.colors.elevation.level0,
  },
});
