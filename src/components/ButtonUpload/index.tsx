import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function ButtonUpload() {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/modal?action=upload`)}
      style={styles.container}
    >
      <FontAwesomeIcon
        icon={["fas", "plus"]}
        color={Colors.camarone50}
        size={24}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.camarone950,
    borderColor: Colors.camarone50,
    marginBottom: Spaces.space24,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    position: "absolute",
    bottom: 0,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 50,
  },
});
