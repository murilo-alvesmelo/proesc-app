import { Document } from "@/src/interfaces";
import { useEffect, useState } from "react";
import { fetchCategories, fetchDocuments } from "../services/homeService";

export const useHomeStore = () => {
  const [documentsAvailable, setDocumentsAvailable] = useState<Document[]>([]);
  const [categories, setCategories] = useState<[string, string][]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState("");
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    const catAvailable = await fetchCategories();
    setCategories(Object.entries(catAvailable));
  };

  const getDocumentsAvailable = async () => {
    const docs = await fetchDocuments();
    setDocumentsAvailable(docs);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setFilteredDocuments("");
    setDocumentsAvailable([]);
    setTimeout(() => {
      getDocumentsAvailable();
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getDocumentsAvailable();
    getCategories();
  }, []);

  return {
    filteredDocuments,
    setFilteredDocuments,
    documentsAvailable,
    categories,
    getDocumentsAvailable,
    handleRefresh,
    loading,
  };
};
