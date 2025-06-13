export const normalizeDocumentUrl = (url: string): string => {
  return url.replace("./assets/", "");
};
