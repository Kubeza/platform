import { useEffect } from "react";

interface FormKeyboardShortcutsProps {
  enabled?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export function FormKeyboardShortcuts({
  enabled = true,
  onSave,
  onCancel,
  onSubmit,
}: FormKeyboardShortcutsProps) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      const modifier =
        event.ctrlKey || event.metaKey;

      if (
        modifier &&
        event.key.toLowerCase() === "s"
      ) {
        event.preventDefault();
        onSave?.();
      }

      if (event.key === "Escape") {
        onCancel?.();
      }

      if (
        modifier &&
        event.key === "Enter"
      ) {
        event.preventDefault();
        onSubmit?.();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    enabled,
    onSave,
    onCancel,
    onSubmit,
  ]);

  return null;
}