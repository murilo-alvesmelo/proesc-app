import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";
import { ButtonApp } from "@/src/components/ButtonApp";
import InputApp from "@/src/components/InputApp";
import { useAuth } from "@/src/context/Auth";

export default function LoginView() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { logIn } = useAuth();

  const handleLogin = () => {
    logIn();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.viewKeyboard}
      >
        <View style={styles.container}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Proesc App</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text>
              <Text style={styles.textLogin}>Login</Text>
            </Text>
            <InputApp
              placeholder="Email"
              onChangeValue={(email) => setEmail(email)}
              value={email}
              icon="envelope"
            />
            <InputApp
              placeholder="Senha"
              onChangeValue={(password) => setPassword(password)}
              value={password}
              icon="lock"
              secureTextEntry
            />

            <ButtonApp
              handlePress={logIn}
              title="Login"
              icon="arrow-right"
              loading={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  viewTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
