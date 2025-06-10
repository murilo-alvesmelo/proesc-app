import React from "react";
import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack>
  );
}
