import { View, Text } from "react-native";
import React from "react";
import EmptySvg from "@/src/components/Svg/empty";
import styles from "./style";

export default function EmptyView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <EmptySvg />
      <Text style={styles.container}>Nenhum documento encontrado.</Text>
    </View>
  );
}
