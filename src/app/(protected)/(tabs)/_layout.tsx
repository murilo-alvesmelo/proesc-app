import React from "react";
import { Text } from "react-native";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
