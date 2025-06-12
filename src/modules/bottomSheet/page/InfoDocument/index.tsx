import { Text, ScrollView, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import { Document } from "@/src/interfaces";
import DocumentViewer from "../../components/DocumentViewer";
import WebView from "react-native-webview";

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
      <WebView
        source={require("@assets/declaracao_matricula.pdf")}
        style={{ width: "100%", height: 400 }}
      />
    </ScrollView>
  );
}
