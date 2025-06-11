export const treatCategorie = (categorie: string) => {
  switch (categorie) {
    case "historico":
      return "Histórico Escolar";
    case "boletim":
      return "Boletim";
    case "declaracao":
      return "Declaração";
    case "comunicado":
      return "Comunicado";
    case "atestado":
      return "Atestado Médico";
    case "justificativa":
      return "Justificativa de Falta";
    case "requerimento":
      return "Requerimento";
    case "outros":
      return "Outros Documentos";
    default:
      return "Categoria Desconhecida";
  }
};

export const treatTypeIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return "file-pdf";
    case "html":
      return "code";
    case "docx":
      return "book";
    case "png":
      return "image";
    case "jpg":
      return "image";
    case "jpeg":
      return "image";
    default:
      return "file";
  }
};
