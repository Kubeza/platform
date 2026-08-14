import { UploadEmpty } from "./UploadEmpty";
import { UploadPreviewGrid } from "./UploadPreviewGrid";
import { useUpload } from "./useUpload";

export function UploadPreview() {
  const { uploads } = useUpload();

  if (uploads.length === 0) {
    return <UploadEmpty />;
  }

  return (
    <UploadPreviewGrid
      uploads={uploads}
    />
  );
}