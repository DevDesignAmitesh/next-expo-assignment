import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://next-expo-assignment.vercel.app/auth" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
