import type {
  UploadItem,
} from "./upload.types";

const UNITS = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
];

export function formatFileSize(
  bytes: number,
  decimals = 2,
): string {
  if (bytes <= 0) {
    return "0 B";
  }

  const index = Math.min(
    Math.floor(
      Math.log(bytes) /
        Math.log(1024),
    ),
    UNITS.length - 1,
  );

  return `${(
    bytes /
    Math.pow(
      1024,
      index,
    )
  ).toFixed(decimals)} ${
    UNITS[index]
  }`;
}

export function isImage(
  file: File,
) {
  return file.type.startsWith(
    "image/",
  );
}

export function isVideo(
  file: File,
) {
  return file.type.startsWith(
    "video/",
  );
}

export function isAudio(
  file: File,
) {
  return file.type.startsWith(
    "audio/",
  );
}

export function createUploadItem(
  file: File,
): UploadItem {
  return {
    id:
      crypto.randomUUID(),

    file,

    status: "idle",

    progress: 0,
  };
}