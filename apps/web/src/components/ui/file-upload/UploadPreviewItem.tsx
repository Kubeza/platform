import { UploadImage } from "./UploadImage";
import { UploadFileIcon } from "./UploadFileIcon";
import { UploadFileName } from "./UploadFileName";
import { UploadFileSize } from "./UploadFileSize";
import { UploadProgress } from "./UploadProgress";
import { UploadStatus } from "./UploadStatus";
import { UploadRemoveButton } from "./UploadRemoveButton";
import { useUpload } from "./useUpload";

interface UploadPreviewItemProps {
  id: string;
}

export function UploadPreviewItem({
  id,
}: UploadPreviewItemProps) {
  const {
    uploads,
    removeUpload,
  } = useUpload();

  const upload =
    uploads.find(
      (item) => item.id === id,
    );

  if (!upload) {
    return null;
  }

  const isImage =
    upload.file.type.startsWith(
      "image/",
    );

  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-4 flex justify-center">
        {isImage ? (
          <UploadImage
            file={upload.file}
          />
        ) : (
          <UploadFileIcon
            file={upload.file}
            className="h-16 w-16 text-primary"
          />
        )}
      </div>

      <div className="space-y-2">
        <UploadFileName
          name={upload.file.name}
        />

        <UploadFileSize
          bytes={upload.file.size}
        />

        <UploadStatus
          status={upload.status}
        />

        <UploadProgress
          progress={upload.progress}
          uploading={
            upload.status ===
            "uploading"
          }
        />
      </div>

      <div className="mt-4">
        <UploadRemoveButton
          onRemove={() =>
            removeUpload(upload.id)
          }
        />
      </div>
    </div>
  );
}