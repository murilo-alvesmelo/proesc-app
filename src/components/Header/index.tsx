import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useAuth } from "@/src/context/Auth";
import styles from "./styles";

export default function Header() {
  const { logOut } = useAuth();
  return (
    <View style={styles.navbar}>
      <SafeAreaView />
      <View style={styles.row}>
        <Text style={styles.title}>Olá, Seja bem vindo </Text>
        <Pressable onPress={logOut}>
          <FontAwesomeIcon
            icon="right-to-bracket"
            size={24}
            style={styles.logo}
          />
        </Pressable>
      </View>
    </View>
  );
}
