import Colors from "@/src/constants/Colors";
import Fonts from "@/src/constants/Fonts";
import Spaces from "@/src/constants/Spaces";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000066",
  },
  subContainer: {
    backgroundColor: Colors.bgWhite,
    height: 600,
    padding: Spaces.space16,
    gap: Spaces.space16,
    borderTopLeftRadius: Spaces.space16,
    borderTopRightRadius: Spaces.space16,
  },
  title: {
    fontSize: Fonts.font16,
  },
});

export default styles;
