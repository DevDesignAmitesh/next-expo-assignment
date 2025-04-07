import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://your-nextjs-deployed-url.com" }}
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
