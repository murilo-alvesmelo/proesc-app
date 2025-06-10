import React from "react";
import { router, Stack } from "expo-router";
import { useAuth } from "../context/Auth";
import { useEffect } from "react";
import "../lib/fontawesome";

export default function RootLayout() {
  return <MainLayout />;
}

function MainLayout() {
  const { isLoggedIn, isReady } = useAuth();

  useEffect(() => {
    if (isReady) {
      if (isLoggedIn) {
        router.replace("/(protected)/home");
      } else {
        router.replace("/(public)/login");
      }
    }
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(public)" />
      <Stack.Screen name="(protected)" />
    </Stack>
  );
}
