import { useAuth } from "@/src/context/Auth";
import { useState } from "react";
import { Alert } from "react-native";
import { loginService } from "../services/loginService";

export const useLoginStore = () => {
  const [matricula, setMatricula] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { logIn } = useAuth();

  const isFormValid = () => {
    if (!matricula || !password) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return false;
    }
    if (matricula && !/^\d+$/.test(matricula)) {
      Alert.alert("Atenção", "Matrícula deve conter apenas números.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!isFormValid()) return;
    setLoading(true);

    try {
      const { matricula: userMatricula, password: userPassword } =
        await loginService(matricula, password);
      logIn(userMatricula, userPassword);
    } catch (err) {
      Alert.alert("Oops!", "Credenciais inválidas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
  };
};
