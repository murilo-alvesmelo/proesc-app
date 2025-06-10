import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.navbar}>
      <SafeAreaView />
      <View style={styles.row}>
        <Text style={styles.title}>Olá, Seja bem vindo </Text>
      </View>
    </View>
  );
}
