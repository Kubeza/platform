import type {
  UploadItem,
} from "./upload.types";

export function createPreviewUrl(
  file: File,
): string {
  return URL.createObjectURL(
    file,
  );
}

export function revokePreviewUrl(
  url?: string,
) {
  if (!url) {
    return;
  }

  URL.revokeObjectURL(url);
}

export function cloneUpload(
  upload: UploadItem,
): UploadItem {
  return {
    ...upload,
  };
}

export function sortUploads(
  uploads: UploadItem[],
): UploadItem[] {
  return [...uploads].sort(
    (a, b) =>
      a.file.name.localeCompare(
        b.file.name,
      ),
  );
}

export function filterUploadsByStatus(
  uploads: UploadItem[],
  status: UploadItem["status"],
): UploadItem[] {
  return uploads.filter(
    (upload) =>
      upload.status ===
      status,
  );
}