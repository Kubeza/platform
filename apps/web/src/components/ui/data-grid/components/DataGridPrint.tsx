import { Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataGridPrintProps {
  targetId: string;
}

export default function DataGridPrint({
  targetId,
}: DataGridPrintProps) {
  function printGrid() {
    const element =
      document.getElementById(
        targetId,
      );

    if (!element) {
      return;
    }

    window.print();
  }

  return (
    <Button
      variant="outline"
      onClick={printGrid}
    >
      <Printer className="mr-2 h-4 w-4" />
      Print
    </Button>
  );
}