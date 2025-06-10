import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useHomeStore } from "../../store/useHomeStore";
import InputApp from "@/src/components/InputApp";
import Tag from "@/src/components/Tag";
import Spaces from "@/src/constants/Spaces";
import Colors from "@/src/constants/Colors";
import Card from "../Card";

export default function ListDocuments() {
  const {
    documentsAvailable,
    categories,
    filteredDocuments,
    setFilteredDocuments,
    handleRefresh,
    loading,
  } = useHomeStore();

  const filteredDocs = documentsAvailable.filter(
    filteredDocuments === ""
      ? () => true
      : (doc) => doc.category === filteredDocuments
  );

  return (
    <View style={styles.documentList}>
      <InputApp
        placeholder="Pesquisar documento"
        value=""
        onChangeValue={() => {}}
        icon="search"
        keyboardType="default"
        type="secondary"
      />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(([key, label]) => (
            <Tag
              key={key}
              title={label}
              isFunction={() => setFilteredDocuments(key)}
              active={filteredDocuments === key}
            />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filteredDocs}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        renderItem={({ item, index }) => <Card item={item} index={index} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefresh}
            colors={[Colors.camarone900]}
            tintColor={Colors.camarone900}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  documentList: {
    flex: 1,
    padding: Spaces.space8,
    gap: Spaces.space8,
  },
});
