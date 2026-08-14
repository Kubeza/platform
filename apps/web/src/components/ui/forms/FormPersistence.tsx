import { useEffect, useRef } from "react";

interface FormPersistenceProps<T> {
  storageKey: string;
  values: T;
  enabled?: boolean;
  storage?: "local" | "session";
  version?: number;
}

interface StoredFormData<T> {
  version: number;
  updatedAt: number;
  values: T;
}

export function FormPersistence<T>({
  storageKey,
  values,
  enabled = true,
  storage = "local",
  version = 1,
}: FormPersistenceProps<T>) {
  const mounted = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const target =
      storage === "local"
        ? window.localStorage
        : window.sessionStorage;

    const payload: StoredFormData<T> = {
      version,
      updatedAt: Date.now(),
      values,
    };

    target.setItem(
      storageKey,
      JSON.stringify(payload),
    );
  }, [
    values,
    storageKey,
    enabled,
    storage,
    version,
  ]);

  return null;
}