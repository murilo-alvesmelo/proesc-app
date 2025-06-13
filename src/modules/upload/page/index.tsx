import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";

import Colors from "@/src/constants/Colors";
import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import { catergoriesUpload } from "@/src/constants/Filters";
import ButtonUpload from "@/src/components/ButtonUpload";
import Header from "@/src/components/Header";
import ListDocuments from "../components/ListDocuments";
import { useUploadStore } from "../store/useUploadStore";
import EmptyView from "../components/Empty";

export default function Upload() {
  const {
    uploadedDocuments,
    filteredDocuments,
    setFilteredDocuments,
    handleRefresh,
    loading,
  } = useUploadStore();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={{ padding: 8, gap: 8 }}>
        <InputApp
          placeholder="Pesquisar documento"
          value={""}
          onChangeValue={() => {}}
          icon="search"
          keyboardType="default"
          type="secondary"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {catergoriesUpload.map((categorie) => (
            <Tag
              key={categorie.key}
              title={categorie.label}
              isFunction={() => setFilteredDocuments(categorie.key)}
              active={filteredDocuments === categorie.key}
            />
          ))}
        </ScrollView>
      </View>
      {uploadedDocuments.length > 0 ? (
        <ListDocuments
          documentsAvailable={uploadedDocuments}
          filteredDocuments={filteredDocuments}
          handleRefresh={handleRefresh}
          loading={loading}
        />
      ) : (
        <EmptyView />
      )}
      <ButtonUpload />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.camarone50,
  },
});
