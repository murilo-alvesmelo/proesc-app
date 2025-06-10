import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/src/context/Auth";

export default function index() {
  const { logOut } = useAuth();
  return (
    <View>
      <Pressable onPress={logOut}>
        <Text>index</Text>
      </Pressable>
    </View>
  );
}
