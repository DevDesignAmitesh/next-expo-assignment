"use client";

import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import { GrGoogle } from "react-icons/gr";
import { signIn } from "next-auth/react";

const isInWebView = (): boolean => {
  const ua =
    typeof navigator !== "undefined"
      ? navigator.userAgent || navigator.vendor || (window as any).opera
      : "";

  return /\bwv\b/.test(ua) || /FBAN|FBAV|Instagram|Expo/.test(ua);
};

const SignInPage = () => {
  const handleGoogleSignIn = () => {
    const callbackUrl = "/";
    if (isInWebView()) {
      // Force open system browser
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ?? window.location.origin;
      const signInUrl = `${baseUrl}/api/auth/signin/google?callbackUrl=${encodeURIComponent(
        callbackUrl
      )}`;
      window.open(signInUrl, "_blank");
    } else {
      // Use NextAuth's method (safer, POST-based)
      signIn("google", { callbackUrl });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 5, maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Welcome to the Demo App
        </Typography>

        <Typography variant="body1" gutterBottom>
          This project demonstrates Google Sign-In using Next.js and Material
          UI. The authenticated app is also integrated into a mobile Expo
          application via WebView. Push notifications are enabled using Firebase
          Cloud Messaging (FCM).
        </Typography>

        <Button
          onClick={handleGoogleSignIn}
          variant="outlined"
          startIcon={<GrGoogle size={20} />}
          sx={{
            mt: 3,
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default SignInPage;
