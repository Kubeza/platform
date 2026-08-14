import * as React from "react";

import { Button } from "@/components/ui/button";

interface FormResetButtonProps
  extends React.ComponentProps<typeof Button> {}

export function FormResetButton({
  children = "Reset",
  ...props
}: FormResetButtonProps) {
  return (
    <Button
      type="reset"
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
}