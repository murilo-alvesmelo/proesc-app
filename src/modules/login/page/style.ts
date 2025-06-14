import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  viewTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.camarone950,
    fontSize: Spaces.space32,
    fontWeight: "bold",
  },
  textLogin: {
    color: Colors.bgWhite,
    fontSize: Spaces.space24,
    fontWeight: "bold",
  },
  loginContainer: {
    height: "50%",
    borderTopLeftRadius: Spaces.space20,
    borderTopRightRadius: Spaces.space20,
    backgroundColor: Colors.camarone950,
    padding: Spaces.space20,
    gap: Spaces.space20,
  },
  viewKeyboard: {
    flex: 1,
  },
  textAccount: {
    color: Colors.bgWhite,
  },
  textLink: {
    color: Colors.bgWhite,
    fontWeight: "bold",
  },
});
