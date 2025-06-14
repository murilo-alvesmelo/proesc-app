import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";
import Spaces from "@/src/constants/Spaces";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  documentCard: {
    height: Platform.OS === "ios" ? 120 : 150,
    backgroundColor: Colors.bgWhite,
    borderRadius: Spaces.space8,
    marginVertical: Spaces.space4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  documentInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: Spaces.space8,
    padding: Spaces.space8,
  },
  title: {
    fontSize: Fonts.font16,
    fontWeight: "bold",
    color: Colors.camarone900,
    padding: Spaces.space8,
  },
  description: {
    fontSize: Fonts.font14,
    color: Colors.camarone700,
    paddingHorizontal: Spaces.space8,
  },
  category: {
    fontSize: Fonts.font14,
    color: Colors.camarone700,
  },
  date: {
    fontSize: Fonts.font14,
    color: Colors.camarone700,
    textAlign: "right",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default styles;
