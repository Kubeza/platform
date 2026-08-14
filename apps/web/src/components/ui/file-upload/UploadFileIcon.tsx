import {
  Archive,
  File,
  FileAudio,
  FileCode2,
  FileImage,
  FileJson,
  FileSpreadsheet,
  FileText,
  FileVideo,
} from "lucide-react";

interface UploadFileIconProps {
  file: File;
  className?: string;
}

export function UploadFileIcon({
  file,
  className,
}: UploadFileIconProps) {
  const type = file.type;

  if (type.startsWith("image/")) {
    return (
      <FileImage
        className={className}
      />
    );
  }

  if (type.startsWith("video/")) {
    return (
      <FileVideo
        className={className}
      />
    );
  }

  if (type.startsWith("audio/")) {
    return (
      <FileAudio
        className={className}
      />
    );
  }

  if (
    type.includes("json")
  ) {
    return (
      <FileJson
        className={className}
      />
    );
  }

  if (
    type.includes("javascript") ||
    type.includes("typescript") ||
    type.includes("xml") ||
    type.includes("yaml")
  ) {
    return (
      <FileCode2
        className={className}
      />
    );
  }

  if (
    type.includes("excel") ||
    type.includes("spreadsheet")
  ) {
    return (
      <FileSpreadsheet
        className={className}
      />
    );
  }

  if (
    type.includes("zip") ||
    type.includes("tar") ||
    type.includes("gzip")
  ) {
    return (
      <Archive
        className={className}
      />
    );
  }

  if (
    type.includes("text") ||
    type.includes("pdf")
  ) {
    return (
      <FileText
        className={className}
      />
    );
  }

  return (
    <File
      className={className}
    />
  );
}