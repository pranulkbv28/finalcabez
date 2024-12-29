import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloclient";
import PorterSans from "@/assets/fonts/porter-sans-inline-block.ttf";
import NewPorterSans from "@/assets/fonts/porter-sans-inline-block.otf";
import PoppinsBold from "@/assets/fonts/Poppins-Bold.otf";
import PoppinsSemiBold from "@/assets/fonts/Poppins-SemiBold.otf";
import PoppinsMedium from "@/assets/fonts/Poppins-Medium.otf";

import { useColorScheme } from "@/components/useColorScheme";
import { Provider } from "react-redux";
import store from "@/store/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PorterSans: PorterSans,
    newPorterSans: NewPorterSans,
    PoppinsBold: PoppinsBold,
    PoppinsSemiBold: PoppinsSemiBold,
    PoppinsMedium: PoppinsMedium,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider
          value={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar
            style="dark"
            translucent={false}
            backgroundColor={colorScheme === "light" ? "black" : "white"}
          />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}
