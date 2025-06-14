import { Document } from "@/src/interfaces";
import { useEffect, useState, useMemo } from "react";
import { fetchDocuments } from "../services/homeService";

export const useHomeStore = () => {
  const [documentsAvailable, setDocumentsAvailable] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState("todos");
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getDocumentsAvailable = async () => {
    const docs = await fetchDocuments();
    setDocumentsAvailable(docs);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setFilteredDocuments("todos");
    setSearchValue("");
    setDocumentsAvailable([]);
    setTimeout(() => {
      getDocumentsAvailable();
      setLoading(false);
    }, 1000);
  };

  const filteredList = useMemo(() => {
    return documentsAvailable.filter((doc) => {
      const matchesCategory =
        filteredDocuments === "todos" || doc.category === filteredDocuments;
      const matchesSearch = doc.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [documentsAvailable, filteredDocuments, searchValue]);

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
    searchValue,
    setSearchValue,
    filteredList,
  };
};
