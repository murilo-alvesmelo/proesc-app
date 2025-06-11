import { useAuth } from "@/src/context/Auth";
import { useState } from "react";
import { Alert } from "react-native";
import { loginService } from "../services/loginService";

export const useLoginStore = () => {
  const [matricula, setMatricula] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logIn } = useAuth();
  const handleLogin = async () => {
    try {
      const { matricula: userMatricula, password: userPassword } =
        await loginService(matricula, password);
      logIn(userMatricula, userPassword);
    } catch (err) {
      Alert.alert("Oops!", "Credenciais inválidas. Tente novamente.");
    }
  };

  return {
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
  };
};
