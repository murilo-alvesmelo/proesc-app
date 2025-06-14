import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/src/constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.bgWhite,
        tabBarInactiveTintColor: Colors.camarone200,
        tabBarStyle: {
          backgroundColor: Colors.camarone950,
          borderTopWidth: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          return (
            <FontAwesomeIcon
              icon={route.name === "index" ? "home" : "upload"}
              size={focused ? 24 : 20}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="uploads"
        options={{
          title: "Uploads",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
