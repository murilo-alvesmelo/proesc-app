import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@session";

const loginAuth = async (matricula: string, senha: string) => {
  if (matricula === "123456" && senha === "aluno123") {
    const session = { matricula, token: "mock-token" };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
  }
  throw new Error("Credenciais inválidas");
};

const logoutAuth = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};

const getSession = async () => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : null;
};

export { loginAuth, logoutAuth, getSession };
