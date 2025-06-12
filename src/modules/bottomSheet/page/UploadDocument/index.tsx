import React from "react";
import { ButtonApp } from "@/src/components/ButtonApp";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { catergoriesUpload, statusDocument } from "@/src/constants/Filters";

import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import Fonts from "@/src/constants/Fonts";
import Colors from "@/src/constants/Colors";
import { useUploadStore } from "../../store/useUploadStore";

export default function UploadDocument() {
  const {
    documentName,
    setDocumentName,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    selectedFile,
    handleSelect,
    handleUpload,
  } = useUploadStore();
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
        <Text>
          {selectedFile
            ? "Um arquivo foi anexado"
            : "Nenhum arquivo selecionado"}
        </Text>
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
