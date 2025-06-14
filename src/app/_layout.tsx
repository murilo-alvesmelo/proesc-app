import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "@/src/context/Auth";
import "../lib/fontawesome";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(protected)"
          options={{
            animation: "none",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(public)"
          options={{
            animation: "none",
            headerShown: false,
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
