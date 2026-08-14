import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UploadCancelButtonProps
  extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  onCancel: () => void;
}

export function UploadCancelButton({
  loading = false,
  onCancel,
  children,
  disabled,
  ...props
}: UploadCancelButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      disabled={loading || disabled}
      onClick={onCancel}
      {...props}
    >
      <X className="mr-2 h-4 w-4" />

      {children ?? "Cancel"}
    </Button>
  );
}