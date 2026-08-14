import {
  Expand,
  Minimize,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import { Button } from "@/components/ui/button";

interface DataGridFullscreenProps {
  containerId: string;
}

export default function DataGridFullscreen({
  containerId,
}: DataGridFullscreenProps) {
  const [
    fullscreen,
    setFullscreen,
  ] = useState(false);

  async function toggleFullscreen() {
    const element =
      document.getElementById(
        containerId,
      );

    if (!element) {
      return;
    }

    if (!document.fullscreenElement) {
      await element.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }

  useEffect(() => {
    function handleChange() {
      setFullscreen(
        !!document.fullscreenElement,
      );
    }

    document.addEventListener(
      "fullscreenchange",
      handleChange,
    );

    return () =>
      document.removeEventListener(
        "fullscreenchange",
        handleChange,
      );
  }, []);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleFullscreen}
    >
      {fullscreen ? (
        <Minimize className="mr-2 h-4 w-4" />
      ) : (
        <Expand className="mr-2 h-4 w-4" />
      )}

      {fullscreen
        ? "Exit Fullscreen"
        : "Fullscreen"}
    </Button>
  );
}