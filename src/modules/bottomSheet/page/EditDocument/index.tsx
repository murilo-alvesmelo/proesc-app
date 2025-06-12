import React, { useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import { DocumentStatus, UploadedDocument } from "@/src/interfaces";
import { statusDocument } from "@/src/constants/Filters";
import { ButtonApp } from "@/src/components/ButtonApp";
import { updateUploadedDocument } from "@/src/modules/upload/services/uploadService";
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

  const teste = async () => {
    try {
      await updateUploadedDocument(item?.id, { ...item, status });
      updateDocumentStatus(item?.id, status);
      router.back();
    } catch (error) {
      console.error("Erro ao atualizar o documento:", error);
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
          handlePress={teste}
          type={status === originalStatus ? "primary" : "secondary"}
          disabled={status === originalStatus}
        />
      </View>
    </ScrollView>
  );
}
