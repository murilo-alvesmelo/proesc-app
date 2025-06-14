export const normalizeDocumentUrl = (url: string): string => {
  if (url.startsWith("./assets/")) {
    return url.replace("./assets/", "");
  }
  return url;
};
