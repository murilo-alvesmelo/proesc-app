import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: Spaces.space8,
    padding: Spaces.space12,
    gap: Spaces.space8,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: Fonts.font16,
    lineHeight: 24,
  },

  primary: {
    backgroundColor: Colors.bgWhite,
    borderWidth: 1,
    borderColor: Colors.camarone950,
  },
  secondary: {
    backgroundColor: Colors.camarone950,
    borderWidth: 1,
    borderColor: Colors.camarone500,
  },
  primaryIcon: {
    color: Colors.camarone950,
  },
  secondaryIcon: {
    color: Colors.camarone200,
  },
  primaryButtonText: {
    color: Colors.camarone950,
  },
  secondaryButtonText: {
    color: Colors.camarone200,
  },
});

export { styles };
