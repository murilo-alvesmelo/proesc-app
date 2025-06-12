import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

type Props = {
  uri: string | undefined;
  type: "pdf" | "html" | "jpg" | "jpeg" | "png" | "docx" | "image";
};

export default function DocumentViewer({ uri, type }: Props) {
  if (!uri) return <Text>Documento inválido</Text>;

  const renderContent = () => {
    if (["jpg", "jpeg", "png", "image"].includes(type)) {
      return (
        <Image source={{ uri }} style={styles.image} resizeMode="contain" />
      );
    }

    if (type === "html" || type === "pdf") {
      return <WebView source={{ uri }} style={styles.webview} />;
    }

    if (type === "docx") {
      return (
        <WebView
          source={{
            uri: `https://docs.google.com/viewer?url=${encodeURIComponent(
              uri
            )}&embedded=true`,
          }}
          style={styles.webview}
        />
      );
    }

    return <Text>Tipo de documento não suportado</Text>;
  };

  return <View style={styles.container}>{renderContent()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width,
    height,
  },
  webview: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
