import { Document } from "@/src/interfaces";
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
