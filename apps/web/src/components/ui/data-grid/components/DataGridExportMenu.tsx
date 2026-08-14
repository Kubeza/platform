import {
  Download,
  FileJson,
  FileSpreadsheet,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataGridExportMenuProps {
  onCsv?: () => void;
  onJson?: () => void;
}

export default function DataGridExportMenu({
  onCsv,
  onJson,
}: DataGridExportMenuProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={onCsv}
      >
        <FileSpreadsheet className="mr-2 h-4 w-4" />
        CSV
      </Button>

      <Button
        variant="outline"
        onClick={onJson}
      >
        <FileJson className="mr-2 h-4 w-4" />
        JSON
      </Button>

      <Button variant="primary">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
    </div>
  );
}