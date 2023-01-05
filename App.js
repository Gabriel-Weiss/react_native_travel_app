import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

import store from "./src/store";
import MainScreen from "./src/screens/MainScreen";
import TaxiScreen from "./src/screens/TaxiScreen";
import DeliverScreen from "./src/screens/DeliverScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Taxi"
                  component={TaxiScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Deliver"
                  component={DeliverScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
