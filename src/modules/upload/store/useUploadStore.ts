import { UploadedDocument } from "@/src/interfaces";
import { useEffect, useState } from "react";
import { fetchUploadedDocuments } from "../services/uploadService";
import { useMemo } from "react";

export const useUploadStore = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState<
    UploadedDocument[]
  >([]);
  const [filteredDocuments, setFilteredDocuments] = useState("todos");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getUploadedDocuments = async () => {
    const docs = await fetchUploadedDocuments();
    setUploadedDocuments(docs);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setFilteredDocuments("todos");
    setUploadedDocuments([]);
    setTimeout(() => {
      getUploadedDocuments();
      setLoading(false);
    }, 1000);
  };

  const updateDocumentStatus = (id: string, newStatus: string) => {
    setUploadedDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, status: newStatus } : doc))
    );
  };

  const filteredList = useMemo(() => {
    return uploadedDocuments.filter((doc) => {
      const matchesCategory =
        filteredDocuments === "todos" || doc.category === filteredDocuments;
      const matchesSearch = doc.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [uploadedDocuments, filteredDocuments, searchValue]);

  useEffect(() => {
    getUploadedDocuments();
  }, [uploadedDocuments]);

  return {
    filteredDocuments,
    setFilteredDocuments,
    uploadedDocuments,
    setUploadedDocuments,
    handleRefresh,
    loading,
    updateDocumentStatus,
    searchValue,
    setSearchValue,
    filteredList,
  };
};
