import type { ReactNode, RefObject } from "react";

export type UploadStatus =
  | "idle"
  | "queued"
  | "uploading"
  | "success"
  | "error"
  | "cancelled";

export interface UploadItem {
  id: string;

  file: File;

  status: UploadStatus;

  progress: number;

  previewUrl?: string;

  error?: string;

  uploadedAt?: Date;

  serverResponse?: unknown;

  metadata?: Record<
    string,
    unknown
  >;
}

export interface UploadOptions {
  multiple?: boolean;

  accept?: string;

  disabled?: boolean;

  maxFiles?: number;

  maxFileSize?: number;
}

export interface UploadContextValue {
  uploads: UploadItem[];

  dragActive: boolean;

  inputRef: RefObject<HTMLInputElement | null>;

  addFiles(
    files: FileList | File[],
  ): void;

  removeUpload(
    id: string,
  ): void;

  clearUploads(): void;

  updateUpload(
    id: string,
    updates: Partial<UploadItem>,
  ): void;

  setDragActive(
    value: boolean,
  ): void;

  openFilePicker(): void;
}

export interface UploadProviderProps {
  children: ReactNode;
}

export interface UploadResult<T = unknown> {
  success: boolean;

  data?: T;

  error?: string;
}