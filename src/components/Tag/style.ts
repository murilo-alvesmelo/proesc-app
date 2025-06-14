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
    backgroundColor: Colors.bgWhite,
    marginRight: Spaces.space8,
    borderWidth: 1,
    borderColor: Colors.camarone900,
  },
  title: {
    color: Colors.camarone900,
    fontSize: Fonts.font12,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
  },

  active: {
    backgroundColor: Colors.camarone950,
  },
  titleActive: {
    color: Colors.camarone100,
  },
});

export default style;
