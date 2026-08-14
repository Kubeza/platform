import { useEffect, useRef } from "react";

interface FormAutosaveProps<T> {
  values: T;
  onSave: (values: T) => Promise<void> | void;
  delay?: number;
  enabled?: boolean;
}

export function FormAutosave<T>({
  values,
  onSave,
  delay = 1000,
  enabled = true,
}: FormAutosaveProps<T>) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      void onSave(values);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [values, onSave, delay, enabled]);

  return null;
}