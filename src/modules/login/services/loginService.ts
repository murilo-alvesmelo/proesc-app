export const loginService = async (matricula: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (matricula === "123456" && password === "aluno123") {
        resolve({ matricula, password });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 2000);
  });
};
