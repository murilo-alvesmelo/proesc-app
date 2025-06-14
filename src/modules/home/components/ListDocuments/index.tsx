import React from "react";
import { StyleSheet, FlatList, View, RefreshControl } from "react-native";
import Spaces from "@/src/constants/Spaces";
import Colors from "@/src/constants/Colors";
import Card from "../Card";
import { Document } from "@/src/interfaces";

type ListDocumentsProps = {
  documentsAvailable: Document[];
  filteredDocuments: string;
  handleRefresh: () => void;
  loading: boolean;
};

export default function ListDocuments({
  documentsAvailable,
  filteredDocuments,
  handleRefresh,
  loading,
}: ListDocumentsProps) {
  const filteredDocs = documentsAvailable?.filter(
    filteredDocuments === "todos"
      ? () => true
      : (doc) => doc.category === filteredDocuments
  );

  return (
    <View style={styles.documentList}>
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
