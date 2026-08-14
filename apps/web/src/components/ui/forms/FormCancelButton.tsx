import * as React from "react";

import { Button } from "@/components/ui/button";

interface FormCancelButtonProps
  extends React.ComponentProps<typeof Button> {
  onCancel?: () => void;
}

export function FormCancelButton({
  onCancel,
  children = "Cancel",
  ...props
}: FormCancelButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={onCancel}
      {...props}
    >
      {children}
    </Button>
  );
}