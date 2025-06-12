import { Text, ScrollView, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import { Document } from "@/src/interfaces";
import DocumentViewer from "../DocumentViewer";

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
      <DocumentViewer
        type={"jpg"}
        uri={`file:///Users/muriloalves/Library/Developer/CoreSimulator/Devices/45F9B886-7A41-47FF-BCCE-EF62F5740877/data/Containers/Data/Application/8D028228-A69A-4DAD-ACA5-9A3F83A86330/Library/Caches/ExponentExperienceData/@anonymous/proesc-app-82558f78-0bd4-4dd1-87ef-33aa877b92e5/ImagePicker/4ACECB11-B469-4EA2-BB9D-9F99A9018FF7.jpg`}
      />
    </ScrollView>
  );
}
