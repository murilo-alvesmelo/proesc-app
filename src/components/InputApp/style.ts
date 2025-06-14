import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: Spaces.space8,
    flexDirection: "row",
    fontSize: Spaces.space16,
    fontWeight: "400",
    gap: Spaces.space12,
    padding: Spaces.space16,
  },
  inputText: {
    flex: 1,
    fontSize: Spaces.space16,
    fontWeight: "400",
  },
  primary: {
    backgroundColor: Colors.camarone950,
    borderColor: Colors.bgWhite,
  },
  secondary: {
    backgroundColor: Colors.bgWhite,
    borderColor: Colors.camarone900,
    borderWidth: 1,
  },
  primaryText: {
    color: Colors.bgWhite,
  },
  secondaryText: {
    color: Colors.camarone900,
  },
});

export { styles };
