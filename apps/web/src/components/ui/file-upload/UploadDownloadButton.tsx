import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UploadDownloadButtonProps
  extends Omit<
    React.ComponentProps<typeof Button>,
    "onClick"
  > {
  url: string;
  fileName?: string;
}

export function UploadDownloadButton({
  url,
  fileName,
  children,
  ...props
}: UploadDownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = url;

    if (fileName) {
      link.download = fileName;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={handleDownload}
      {...props}
    >
      <Download className="mr-2 h-4 w-4" />

      {children ?? "Download"}
    </Button>
  );
}