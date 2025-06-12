import { UploadedDocument } from "@/src/interfaces";
import { useEffect, useState } from "react";
import { fetchUploadedDocuments } from "../services/uploadService";

export const useUploadStore = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState<
    UploadedDocument[]
  >([]);
  const [filteredDocuments, setFilteredDocuments] = useState("todos");
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

  useEffect(() => {
    getUploadedDocuments();
  }, []);

  return {
    filteredDocuments,
    setFilteredDocuments,
    uploadedDocuments,
    setUploadedDocuments,
    handleRefresh,
    loading,
  };
};
