import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useHomeStore } from "../store/useHomeStore";

import Colors from "@/src/constants/Colors";
import ListDocuments from "../components/ListDocuments";
import Header from "../components/Header";
import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import ButtonUpload from "@/src/components/ButtonUpload";
import { categoriesDocuments } from "@/src/constants/Filters";

export default function Home() {
  const {
    documentsAvailable,
    filteredDocuments,
    setFilteredDocuments,
    handleRefresh,
    loading,
  } = useHomeStore();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={{ padding: 8, gap: 8 }}>
        <InputApp
          placeholder="Pesquisar documento"
          value=""
          onChangeValue={() => {}}
          icon="search"
          keyboardType="default"
          type="secondary"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoriesDocuments.map((categorie) => (
            <Tag
              key={categorie.key}
              title={categorie.label}
              isFunction={() => setFilteredDocuments(categorie.key)}
              active={filteredDocuments === categorie.key}
            />
          ))}
        </ScrollView>
      </View>
      <ListDocuments
        documentsAvailable={documentsAvailable}
        filteredDocuments={filteredDocuments}
        handleRefresh={handleRefresh}
        loading={loading}
      />
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
