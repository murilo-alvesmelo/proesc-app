export interface Document {
  id: string;
  title: string;
  type: "pdf" | "docx" | "html" | "image";
  category: "historico" | "boletim" | "declaracao" | "comunicado";
  description?: string;
  url: string;
  date: string;
  size: string;
}

export interface UploadedDocument {
  id: string;
  title: string;
  category: "atestado" | "justificativa" | "requerimento";
  status: "enviado" | "em_analise" | "aprovado" | "rejeitado";
  uploadDate: string;
  file: File;
}

export type Category = "atestado" | "justificativa" | "requerimento";
export type DocumentStatus =
  | "enviado"
  | "em_analise"
  | "aprovado"
  | "rejeitado";
