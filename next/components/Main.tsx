"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

const Main = ({
  user,
}: {
  user: { email: string; name: string; image: string };
}) => {
  useEffect(() => {
    if (user.email) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ email: user.email })
      );
    }
  }, [user.email]);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-4xl text-white font-medium">Hello, {user.name}</h1>
    </div>
  );
};

export default Main;
