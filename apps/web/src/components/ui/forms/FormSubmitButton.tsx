import * as React from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FormSubmitButtonProps
  extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  loadingText?: string;
}

export function FormSubmitButton({
  loading = false,
  loadingText = "Submitting...",
  children,
  disabled,
  ...props
}: FormSubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="primary"
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}

      {loading ? loadingText : children}
    </Button>
  );
}