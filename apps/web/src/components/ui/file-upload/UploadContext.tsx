import { createContext } from "react";

import type {
  UploadContextValue,
} from "./upload.types";

export const UploadContext =
  createContext<UploadContextValue | null>(
    null,
  );