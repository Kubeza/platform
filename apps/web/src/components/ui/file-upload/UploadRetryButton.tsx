import { RotateCw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UploadRetryButtonProps
  extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  onRetry: () => void;
}

export function UploadRetryButton({
  loading = false,
  onRetry,
  children,
  disabled,
  ...props
}: UploadRetryButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      disabled={loading || disabled}
      onClick={onRetry}
      {...props}
    >
      <RotateCw
        className={`mr-2 h-4 w-4 ${
          loading ? "animate-spin" : ""
        }`}
      />

      {children ?? "Retry"}
    </Button>
  );
}