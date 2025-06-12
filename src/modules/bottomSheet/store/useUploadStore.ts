import { Category, DocumentStatus } from "@/src/interfaces";
import {
  pickFromCamera,
  pickFromFiles,
  pickFromGallery,
} from "@/src/utils/functionsPick";
import { useState } from "react";
import { Alert } from "react-native";
import { uploadDocument } from "../services/modalService";
import { router } from "expo-router";

export const useUploadStore = () => {
  const [documentName, setDocumentName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedStatus, setSelectedStatus] = useState<DocumentStatus>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSelect = async (source: "camera" | "gallery" | "files") => {
    const file = await selectFile(source);
    if (file) setSelectedFile(file);
  };

  const selectFile = async (source: "camera" | "gallery" | "files") => {
    if (source === "camera") return await pickFromCamera();
    if (source === "gallery") return await pickFromGallery();
    if (source === "files") return await pickFromFiles();
    return null;
  };
  const validateUpload = (): boolean => {
    if (!documentName || !selectedCategory || !selectedStatus) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return false;
    }
    if (!selectedFile) {
      Alert.alert("Erro", "Por favor, anexe um documento.");
      return false;
    }
    return true;
  };

  const buildDocumentData = () => ({
    title: documentName,
    category: selectedCategory!,
    status: selectedStatus!,
    file: selectedFile!,
    uploadDate: new Date().toISOString().split("T")[0],
  });

  const handleUpload = async () => {
    if (!validateUpload()) return;
    const documentData = buildDocumentData();
    await uploadDocument(documentData);
    Alert.alert("Sucesso", "Documento enviado com sucesso!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return {
    documentName,
    setDocumentName,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    selectedFile,
    setSelectedFile,
    handleSelect,
    handleUpload,
    validateUpload,
    selectFile,
  };
};
