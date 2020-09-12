import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import colors from "./styles/colors";
import typography from "./styles/typography";

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  async function loadResourcesAsync() {
    await Promise.all([
      Font.loadAsync({
        KumbhSansLight: require("./assets/fonts/KumbhSans-Light.ttf"),
        KumbhSansRegular: require("./assets/fonts/KumbhSans-Regular.ttf"),
        KumbhSansBold: require("./assets/fonts/KumbhSans-Bold.ttf"),
      }),
    ]);
  }
  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => loadResourcesAsync()}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={typography.sans16black}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
});
