import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: Spaces.space24,
    justifyContent: "center",
    alignItems: "center",
    padding: Spaces.space12,
    backgroundColor: Colors.camarone950,
    marginRight: Spaces.space8,
  },
  title: {
    color: Colors.camarone100,
    fontSize: Fonts.font12,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
  },

  active: {
    backgroundColor: Colors.bgWhite,
    borderColor: Colors.camarone950,
    borderWidth: 1,
  },
  titleActive: {
    color: Colors.camarone950,
  },
});

export default style;
