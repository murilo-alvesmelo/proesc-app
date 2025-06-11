import { useEffect, useState } from "react";
import { getDocumentById } from "../services/modalService";
import { Document } from "@/src/interfaces";

export const useModalStore = () => {
  const [document, setDocument] = useState<Document>();

  const getData = async (id: string) => {
    const res = await getDocumentById(id);
    setDocument(res);
  };

  useEffect(() => {}, []);

  return {
    document,
    setDocument,
    getData,
  };
};
