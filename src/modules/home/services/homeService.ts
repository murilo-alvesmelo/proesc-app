import { Document, UploadedDocument } from "@/src/interfaces";
import data from "../../../../assets/mock/data.json";

export const fetchDocuments = async () => {
  await new Promise((res) => setTimeout(res, 500));
  return data.availableDocuments as Document[];
};

export const fetchCategories = async () => {
  await new Promise((res) => setTimeout(res, 500));
  return data.documentCategories.available;
};

export const uploadDocument = async (doc: UploadedDocument) => {
  await new Promise((res) => setTimeout(res, 1000));
  return { success: true };
};
