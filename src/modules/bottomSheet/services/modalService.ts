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

export const getUploadedDocumentById = async (id: string) => {
  try {
    const res = await api.get(`/uploadedDocuments/${id}`);
    return res.data as UploadedDocument;
  } catch (error) {
    console.error("Error fetching uploaded document by ID:", error);
    throw error;
  }
};

export const uploadDocument = async (document: UploadedDocument) => {
  try {
    const res = await api.post("/uploadedDocuments", document);
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
};

export const getDocumentCloudFlareUrl = async (document: string) => {
  try {
    return `https://pub-22a072508372410c886c24ac622a9588.r2.dev/${document}`;
  } catch (error) {
    console.error("Error generating CloudFlare URL:", error);
    throw error;
  }
};
