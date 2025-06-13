import { Text, ScrollView, View } from "react-native";
import React from "react";
import styles from "./style";
import { Document } from "@/src/interfaces";

export default function InfoDocument({ item }: { item: Document | undefined }) {
  return (
    <ScrollView>
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>Documento:</Text>
          <Text style={styles.description}>
            {item?.title || "Nome do documento não disponível"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Descrição:</Text>
          <Text style={styles.description} numberOfLines={4}>
            {item?.description || "Descrição não disponível"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Data:</Text>
          <Text style={styles.description} numberOfLines={4}>
            {(item?.date && new Date(item?.date).toLocaleDateString("pt-BR")) ||
              "Data não disponível"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
