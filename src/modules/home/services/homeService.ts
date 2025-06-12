import { Document, UploadedDocument } from "@/src/interfaces";
import { api } from "@/src/lib/axios";

export const fetchDocuments = async () => {
  try {
    const res = await api.get("/availableDocuments");
    return res.data as Document[];
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export const fetchUploadedDocuments = async () => {
  try {
    const res = await api.get("/uploadedDocuments");
    return res.data as UploadedDocument[];
  } catch (error) {
    console.error("Error fetching uploaded documents:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const res = await api.get("/documentCategories");
    return res.data.available;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
