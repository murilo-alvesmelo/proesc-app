import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ButtonApp } from "@/src/components/ButtonApp";
import { useLoginStore } from "../store/useLoginStore";
import { styles } from "./style";

import InputApp from "@/src/components/InputApp";
import LogoSvg from "@/src/components/Svg/logo";

export default function Login() {
  const {
    loading,
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
  } = useLoginStore();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.viewKeyboard}
      >
        <View style={styles.container}>
          <View style={styles.viewTitle}>
            <LogoSvg />
            <Text style={styles.title}>Proesc App</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text>
              <Text style={styles.textLogin}>Login</Text>
            </Text>
            <InputApp
              placeholder="Matricula"
              keyboardType="number-pad"
              onChangeValue={(email) => setMatricula(email)}
              value={matricula}
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
              handlePress={handleLogin}
              title="Login"
              icon="arrow-right"
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
