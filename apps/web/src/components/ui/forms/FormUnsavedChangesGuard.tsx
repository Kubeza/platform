import { useEffect } from "react";

interface FormUnsavedChangesGuardProps {
  enabled: boolean;
  message?: string;
}

export function FormUnsavedChangesGuard({
  enabled,
  message = "You have unsaved changes. Are you sure you want to leave?",
}: FormUnsavedChangesGuardProps) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleBeforeUnload = (
      event: BeforeUnloadEvent,
    ) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload,
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload,
      );
    };
  }, [enabled, message]);

  return null;
}