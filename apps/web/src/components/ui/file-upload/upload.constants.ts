export const DEFAULT_MAX_FILES =
  10;

export const DEFAULT_MAX_FILE_SIZE =
  25 * 1024 * 1024;

export const IMAGE_ACCEPT =
  "image/*";

export const VIDEO_ACCEPT =
  "video/*";

export const AUDIO_ACCEPT =
  "audio/*";

export const DOCUMENT_ACCEPT = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".txt",
].join(",");

export const DEFAULT_ACCEPT =
  [
    IMAGE_ACCEPT,
    VIDEO_ACCEPT,
    AUDIO_ACCEPT,
    DOCUMENT_ACCEPT,
  ].join(",");

export const DEFAULT_UPLOAD_STATUS =
  "idle";

export const UPLOAD_STATUSES = [
  "idle",
  "queued",
  "uploading",
  "success",
  "error",
  "cancelled",
] as const;