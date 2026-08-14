import { useContext } from "react";

import { UploadContext } from "./UploadContext";

export function useUpload() {
  const context =
    useContext(UploadContext);

  if (context === null) {
    throw new Error(
      "useUpload must be used inside UploadProvider.",
    );
  }

  return context;
}