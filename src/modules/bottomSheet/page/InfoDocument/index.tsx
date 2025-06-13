import React, { useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import { Document } from "@/src/interfaces";
import { normalizeDocumentUrl } from "@/src/utils/resolveDocument";
import { getDocumentCloudFlareUrl } from "../../services/modalService";
import WebView from "react-native-webview";
import styles from "./style";

export default function InfoDocument({ item }: { item: Document | undefined }) {
  const [documentUrl, setDocumentUrl] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchDocumentUrl = async () => {
      if (item) {
        const normalizedUrl = normalizeDocumentUrl(item.url);
        const cloudFlareUrl = await getDocumentCloudFlareUrl(normalizedUrl);
        setDocumentUrl(cloudFlareUrl);
      }
    };

    fetchDocumentUrl();
  }, [item]);
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
        {documentUrl && (
          <WebView
            source={{
              uri: documentUrl,
            }}
            style={{
              width: "100%",
              height: 500,
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
