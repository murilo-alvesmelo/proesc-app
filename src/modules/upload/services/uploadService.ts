import { UploadedDocument } from "@/src/interfaces";
import { api } from "@/src/lib/axios";

export const fetchUploadedDocuments = async () => {
  try {
    const res = await api.get("/uploadedDocuments");
    return res.data as UploadedDocument[];
  } catch (error) {
    console.error("Error fetching uploaded documents:", error);
    throw error;
  }
};

export const updateUploadedDocument = async (
  id: string | undefined,
  data: UploadedDocument
) => {
  try {
    const res = await api.put(`/uploadedDocuments/${id}`, {
      ...data,
    });
    return res.data as UploadedDocument;
  } catch (error) {
    console.error("Error updating uploaded document:", error);
    throw error;
  }
};
