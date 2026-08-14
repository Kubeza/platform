import type { ReactNode } from "react";

import { UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useUpload } from "./useUpload";

interface UploadTriggerProps {
  children?: ReactNode;

  disabled?: boolean;
}

export function UploadTrigger({
  children,
  disabled = false,
}: UploadTriggerProps) {
  const {
    openFilePicker,
  } = useUpload();

  return (
    <Button
      type="button"
      variant="primary"
      disabled={disabled}
      onClick={openFilePicker}
    >
      <UploadCloud className="mr-2 h-4 w-4" />

      {children ??
        "Choose Files"}
    </Button>
  );
}