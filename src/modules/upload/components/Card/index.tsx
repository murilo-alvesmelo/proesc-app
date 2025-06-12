import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { UploadedDocument } from "@/src/interfaces";
import { treatCategorie, treatStatus } from "@/src/utils/treatCategorie";
import { router } from "expo-router";
import styles from "./style";

type CardProps = {
  item: UploadedDocument;
  index: number;
};

export default function Card({ item, index }: CardProps) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/modal?id=${item.id}&action=view`)}
    >
      <Animated.View
        entering={SlideInLeft.delay(300 * ((index % 10) + 1)).duration(300)}
        style={styles.documentCard}
      >
        <View style={styles.documentInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category} numberOfLines={1}>
            <Text style={styles.boldText}>Tipo:</Text>{" "}
            {treatCategorie(item.category) || "Sem categoria"}
          </Text>
          <Text style={styles.category} numberOfLines={1}>
            <Text style={styles.boldText}>Status:</Text>{" "}
            {treatStatus(item.status) || "Sem Status"}
          </Text>
          <Text style={styles.category}>
            <Text style={styles.boldText}>Data:</Text>{" "}
            {new Date(item.uploadDate).toLocaleDateString("pt-BR") ||
              "Sem data"}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
