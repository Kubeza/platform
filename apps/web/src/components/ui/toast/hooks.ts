import {
  useCallback,
  useState,
} from "react";

import {
  generateToastId,
} from "./utils";

import type {
  ToastData,
} from "./toast.types";

export function useToast() {
  const [
    toasts,
    setToasts,
  ] = useState<ToastData[]>([]);

  const show = useCallback(
    (
      toast: Omit<
        ToastData,
        "id"
      >,
    ) => {
      const id =
        generateToastId();

      setToasts(
        (previous) => [
          ...previous,
          {
            ...toast,
            id,
          },
        ],
      );
    },
    [],
  );

  const remove =
    useCallback(
      (id: string) => {
        setToasts(
          (previous) =>
            previous.filter(
              (toast) =>
                toast.id !== id,
            ),
        );
      },
      [],
    );

  return {
    toasts,
    show,
    remove,
  };
}