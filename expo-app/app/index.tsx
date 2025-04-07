import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import messaging from "@react-native-firebase/messaging";

export default function Index() {
  const [email, setEmail] = useState<string | null>(null);
  const webviewRef = useRef(null);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  useEffect(() => {
    const getTokenAndSend = async () => {
      if (!email) return; // wait for email from WebView

      const token = await messaging().getToken();
      console.log("FCM Token:", token);

      await fetch("https://next-expo-assignment.vercel.app/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, email }),
      });
    };

    if (email) {
      requestUserPermission().then(() => {
        getTokenAndSend();
      });
    }
  }, [email]);

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.email) {
        console.log("Received email from WebView:", data.email);
        setEmail(data.email);
      }
    } catch (e) {
      console.log("Failed to parse message:", e);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: "https://next-expo-assignment.vercel.app/auth" }}
        style={{ flex: 1 }}
        onMessage={handleMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
