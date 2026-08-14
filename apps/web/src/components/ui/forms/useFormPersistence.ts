import { useCallback, useEffect, useState } from "react";

interface PersistenceOptions {
  storage?: "local" | "session";
  version?: number;
}

interface PersistedState<T> {
  version: number;
  updatedAt: number;
  values: T;
}

export function useFormPersistence<T>(
  storageKey: string,
  options: PersistenceOptions = {},
) {
  const {
    storage = "local",
    version = 1,
  } = options;

  const target =
    typeof window === "undefined"
      ? null
      : storage === "local"
        ? window.localStorage
        : window.sessionStorage;

  const [values, setValues] =
    useState<T | null>(null);

  useEffect(() => {
    if (!target) return;

    const raw =
      target.getItem(storageKey);

    if (!raw) return;

    try {
      const parsed =
        JSON.parse(raw) as PersistedState<T>;

      if (
        parsed.version === version
      ) {
        setValues(parsed.values);
      }
    } catch {
      target.removeItem(storageKey);
    }
  }, [
    storageKey,
    target,
    version,
  ]);

  const clear = useCallback(() => {
    target?.removeItem(storageKey);
    setValues(null);
  }, [storageKey, target]);

  return {
    persistedValues: values,
    clearPersistence: clear,
  };
}