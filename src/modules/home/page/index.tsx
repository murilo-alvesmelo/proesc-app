import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useHomeStore } from "../store/useHomeStore";

import Colors from "@/src/constants/Colors";
import ListDocuments from "../components/ListDocuments";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ListDocuments />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.camarone50,
  },
});
