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
import { uploadDocument } from "../../services/modalService";
import { router } from "expo-router";
import { Category, DocumentStatus } from "@/src/interfaces";

export default function UploadDocument() {
  const [documentName, setDocumentName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedStatus, setSelectedStatus] = useState<DocumentStatus>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleSelect = async (source: "camera" | "gallery" | "files") => {
    let file;
    if (source === "camera") file = await pickFromCamera();
    if (source === "gallery") file = await pickFromGallery();
    if (source === "files") file = await pickFromFiles();

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!documentName || !selectedCategory || !selectedStatus) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    if (!selectedFile) {
      Alert.alert("Erro", "Por favor, anexe um documento.");
      return;
    }
    const documentData = {
      id: "",
      title: documentName,
      category: selectedCategory,
      status: selectedStatus,
      file: "",
      uploadDate: new Date().toISOString().split("T")[0],
    };
    await uploadDocument(documentData);
    Alert.alert("Sucesso", "Documento enviado com sucesso!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Nome do Documento</Text>
        <InputApp
          placeholder="Digite o nome do documento"
          type="secondary"
          onChangeValue={setDocumentName}
          value={documentName}
        />
        <Text style={styles.title}>Categoria do Documento</Text>
        <View style={styles.tagContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {catergoriesUpload.map((category) => (
              <Tag
                key={category.key}
                title={category.label}
                isFunction={() => setSelectedCategory(category.key)}
                active={selectedCategory === category.key}
              />
            ))}
          </ScrollView>
        </View>
        <Text style={styles.title}>Status do Documento</Text>
        <View style={styles.tagContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {statusDocument.map((status) => (
              <Tag
                key={status.key}
                title={status.label}
                isFunction={() => setSelectedStatus(status.key)}
                active={selectedStatus === status.key}
              />
            ))}
          </ScrollView>
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
        <ButtonApp
          title="Enviar Documento"
          handlePress={handleUpload}
          type="secondary"
          icon="check"
        />
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
