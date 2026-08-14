import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UploadRemoveButtonProps
  extends React.ComponentProps<typeof Button> {
  onRemove: () => void;
}

export function UploadRemoveButton({
  onRemove,
  children,
  ...props
}: UploadRemoveButtonProps) {
  return (
    <Button
      type="button"
      variant="danger"
      onClick={onRemove}
      {...props}
    >
      <Trash2 className="mr-2 h-4 w-4" />

      {children ?? "Remove"}
    </Button>
  );
}