import Fonts from "@/src/constants/Fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  subContainer: {
    gap: 16,
  },
  title: {
    fontSize: Fonts.font16,
    fontWeight: "bold",
  },
  description: {
    fontSize: Fonts.font14,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
