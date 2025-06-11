import { Document } from "@/src/interfaces";
import { useEffect, useState } from "react";
import { fetchCategories, fetchDocuments } from "../services/homeService";

export const useHomeStore = () => {
  const [documentsAvailable, setDocumentsAvailable] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState("todos");
  const [loading, setLoading] = useState(false);

  const getDocumentsAvailable = async () => {
    const docs = await fetchDocuments();
    setDocumentsAvailable(docs);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setFilteredDocuments("todos");
    setDocumentsAvailable([]);
    setTimeout(() => {
      getDocumentsAvailable();
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getDocumentsAvailable();
  }, []);

  return {
    filteredDocuments,
    setFilteredDocuments,
    documentsAvailable,
    getDocumentsAvailable,
    handleRefresh,
    loading,
  };
};
