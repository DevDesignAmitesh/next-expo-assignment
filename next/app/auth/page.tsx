"use client";

import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import { GrGoogle } from "react-icons/gr";

const isInWebView = (): boolean => {
  const ua =
    typeof navigator !== "undefined"
      ? navigator.userAgent || navigator.vendor || (window as any).opera
      : "";

  return /\bwv\b/.test(ua) || /FBAN|FBAV|Instagram|Expo/.test(ua);
};

const SignInPage = () => {
  const handleGoogleSignIn = () => {
    const callbackUrl = encodeURIComponent("/");
    const signInUrl = `/api/auth/signin/google?callbackUrl=${callbackUrl}`;

    if (isInWebView()) {
      // Force open in system browser if in WebView (Expo)
      window.open(signInUrl, "_blank");
    } else {
      // Regular redirect
      window.location.href = signInUrl;
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
