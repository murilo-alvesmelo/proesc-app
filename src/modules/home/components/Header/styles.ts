import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: Spaces.space12,
    paddingVertical: Spaces.space16,
    backgroundColor: Colors.camarone950,
    color: Colors.camarone200,
  },
  title: {
    fontSize: Fonts.font16,
    fontWeight: "bold",
    color: Colors.camarone100,
  },
  logo: {
    width: 40,
    height: 40,
    color: Colors.camarone100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default styles;
