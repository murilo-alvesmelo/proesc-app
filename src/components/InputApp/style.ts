import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.bgWhite,
    borderRadius: Spaces.space8,
    color: Colors.bgWhite,
    flexDirection: "row",
    fontSize: Spaces.space16,
    fontWeight: "400",
    gap: Spaces.space12,
    padding: Spaces.space16,
  },
  inputText: {
    flex: 1,
    color: Colors.bgWhite,
    fontSize: Spaces.space16,
    fontWeight: "400",
  },
});

export { styles };
