import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useHomeStore } from "../store/useHomeStore";
import { categoriesDocuments } from "@/src/constants/Filters";

import Colors from "@/src/constants/Colors";
import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import Header from "@/src/components/Header";

import ListDocuments from "../components/ListDocuments";

export default function Home() {
  const {
    searchValue,
    setSearchValue,
    filteredList,
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
          value={searchValue}
          onChangeValue={setSearchValue}
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
        documentsAvailable={filteredList}
        filteredDocuments={filteredDocuments}
        handleRefresh={handleRefresh}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.camarone50,
  },
});
