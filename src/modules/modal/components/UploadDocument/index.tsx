import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import { ButtonApp } from "@/src/components/ButtonApp";
import Fonts from "@/src/constants/Fonts";
import Colors from "@/src/constants/Colors";
import {
  pickFromCamera,
  pickFromFiles,
  pickFromGallery,
} from "@/src/utils/functionsPick";
import { catergoriesUpload, statusDocument } from "@/src/constants/Filters";

export default function UploadDocument() {
  const [documentName, setDocumentName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const handleSelect = async (source: "camera" | "gallery" | "files") => {
    let file;
    if (source === "camera") file = await pickFromCamera();
    if (source === "gallery") file = await pickFromGallery();
    if (source === "files") file = await pickFromFiles();

    if (file) {
      console.log("Arquivo selecionado:", file);
      Alert.alert("Arquivo selecionado", file.name || file.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Nome do Documento</Text>
        <InputApp
          type="secondary"
          onChangeValue={setDocumentName}
          value={documentName}
          placeholder="Digite o nome do documento"
        />
        <Text style={styles.title}>Categoria do Documento</Text>
        <View style={styles.tagContainer}>
          {catergoriesUpload.map((category) => (
            <Tag
              key={category.key}
              title={category.label}
              isFunction={() => setSelectedCategory(category.key)}
              active={selectedCategory === category.key}
            />
          ))}
        </View>
        <Text style={styles.title}>Status do Documento</Text>
        <View style={styles.tagContainer}>
          {statusDocument.map((status) => (
            <Tag
              key={status.key}
              title={status.label}
              isFunction={() => setSelectedStatus(status.key)}
              active={selectedStatus === status.key}
            />
          ))}
        </View>
        <Text style={styles.title}>Anexar Documento</Text>
        <View style={styles.buttonContainer}>
          <ButtonApp title="Foto" handlePress={() => handleSelect("camera")} />
          <ButtonApp
            title="Galeria"
            handlePress={() => handleSelect("gallery")}
          />
          <ButtonApp
            title="Arquivo"
            handlePress={() => handleSelect("files")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: Fonts.font16,
    color: Colors.camarone900,
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
});
