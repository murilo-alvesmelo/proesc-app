import React, { useEffect } from "react";
import { Text, ScrollView, View, Alert } from "react-native";
import { DocumentStatus, UploadedDocument } from "@/src/interfaces";
import { statusDocument } from "@/src/constants/Filters";
import { ButtonApp } from "@/src/components/ButtonApp";
import {
  deleteUploadedDocument,
  updateUploadedDocument,
} from "@/src/modules/upload/services/uploadService";
import { useUploadStore } from "@/src/modules/upload/store/useUploadStore";
import { router } from "expo-router";
import Tag from "@/src/components/Tag";
import styles from "./style";

export default function EditDocument({
  item,
}: {
  item: UploadedDocument | undefined;
}) {
  const { updateDocumentStatus } = useUploadStore();
  const [status, setStatus] = React.useState<DocumentStatus>();
  const [originalStatus, setOriginalStatus] = React.useState<string>();

  useEffect(() => {
    if (item) {
      setStatus(item.status);
      setOriginalStatus(item.status);
    }
  }, [item]);

  const editStatus = async () => {
    try {
      await updateUploadedDocument(item?.id, { ...item, status });
      updateDocumentStatus(item?.id, status);
      router.back();
    } catch (error) {
      console.error("Erro ao atualizar o documento:", error);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Apagar Documento",
      "Você tem certeza que deseja apagar este documento? Esta ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Apagar",
          style: "destructive",
          onPress: () => handleDeleteDocument(),
        },
      ]
    );
  };

  const handleDeleteDocument = async () => {
    try {
      if (item?.id) {
        await deleteUploadedDocument(item.id);
        router.back();
      }
    } catch (error) {
      console.error("Erro ao apagar o documento:", error);
    }
  };
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
            {item?.category || "Descrição não disponível"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Data:</Text>
          <Text style={styles.description} numberOfLines={4}>
            {(item?.uploadDate &&
              new Date(item?.uploadDate).toLocaleDateString("pt-BR")) ||
              "Data não disponível"}
          </Text>
        </View>
        <Text style={styles.title}>Status:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {statusDocument.map((stt) => (
            <Tag
              key={stt.key}
              title={stt.label}
              isFunction={() => setStatus(stt.key)}
              active={status === stt.key}
            />
          ))}
        </ScrollView>

        <ButtonApp
          title="Salvar Alterações"
          handlePress={editStatus}
          icon="check"
          type={status === originalStatus ? "primary" : "secondary"}
          disabled={status === originalStatus}
        />
        <ButtonApp
          title="Apagar Documento"
          handlePress={confirmDelete}
          icon="trash"
          type="secondary"
        />
      </View>
    </ScrollView>
  );
}
