export const login = async (matricula: string, password: string) => {
  if (matricula === "123456" && password === "aluno123") {
    return { matricula, password };
  }
  throw new Error("Credenciais inválidas");
};
