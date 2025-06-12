import { useState } from "react";
import { getDocumentById } from "../services/modalService";
import { getUploadedDocumentById } from "../services/modalService";
import { Document, UploadedDocument } from "@/src/interfaces";

export const useModalStore = () => {
  const [document, setDocument] = useState<Document>();
  const [uploadedDocument, setUploadedDocument] = useState<UploadedDocument>();

  const getData = async (id: string) => {
    const res = await getDocumentById(id);
    setDocument(res);
  };

  const getUploadedDocument = async (id: string) => {
    const res = await getUploadedDocumentById(id);
    setUploadedDocument(res);
  };

  return {
    uploadedDocument,
    document,
    setDocument,
    getData,
    getUploadedDocument,
  };
};
