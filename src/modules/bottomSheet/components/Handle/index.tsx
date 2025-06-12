import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";

type HandleProps = {
  onPress: () => void;
  type?: "view" | "upload" | "edit";
};

export default function Handle({ onPress, type }: HandleProps) {
  const renderTitle = () => {
    switch (type) {
      case "view":
        return "Informações do documento";
      case "upload":
        return "Upload de documento";
      case "edit":
        return "Edição de documento";
      default:
        return "Documento";
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {renderTitle()}
      </Text>
      <Pressable style={{}} onPress={onPress}>
        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          color={Colors.camarone950}
          size={24}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: Fonts.font20,
    fontWeight: "bold",
    color: Colors.camarone950,
    textAlignVertical: "center",
  },
});
