import { cn } from "@/lib/utils";

interface UploadFileNameProps {
  name: string;
  className?: string;
  maxLength?: number;
  showTooltip?: boolean;
}

function truncate(
  value: string,
  maxLength: number,
) {
  if (value.length <= maxLength) {
    return value;
  }

  const extensionIndex =
    value.lastIndexOf(".");

  if (extensionIndex === -1) {
    return `${value.slice(
      0,
      maxLength - 3,
    )}...`;
  }

  const extension =
    value.slice(extensionIndex);

  const available =
    maxLength -
    extension.length -
    3;

  return `${value.slice(
    0,
    Math.max(available, 1),
  )}...${extension}`;
}

export function UploadFileName({
  name,
  className,
  maxLength = 40,
  showTooltip = true,
}: UploadFileNameProps) {
  const displayName = truncate(
    name,
    maxLength,
  );

  return (
    <span
      title={
        showTooltip
          ? name
          : undefined
      }
      className={cn(
        "block truncate text-sm font-medium",
        className,
      )}
    >
      {displayName}
    </span>
  );
}