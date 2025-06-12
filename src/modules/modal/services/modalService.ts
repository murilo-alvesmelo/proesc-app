import { Document, UploadedDocument } from "@/src/interfaces";
import { api } from "@/src/lib/axios";

export const getDocumentById = async (id: string) => {
  try {
    const res = await api.get(`/availableDocuments/${id}`);
    return res.data as Document;
  } catch (error) {
    console.error("Error fetching document by ID:", error);
    throw error;
  }
};

export const uploadDocument = async (document: UploadedDocument) => {
  try {
    const res = await api.post("/uploadedDocuments", document);
    console.log("Document uploaded successfully:", res.data);
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
};
