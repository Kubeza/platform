import { cn } from "@/lib/utils";

import Toast from "./Toast";
import ToastDescription from "./ToastDescription";
import ToastTitle from "./ToastTitle";

import type {
  ToastData,
} from "./toast.types";

interface ToastContainerProps {
  toasts: ToastData[];

  remove: (
    id: string,
  ) => void;
}

const ToastContainer = ({
  toasts,
  remove,
}: ToastContainerProps) => {
  return (
    <div
      className={cn(
        "fixed right-6 top-6 z-[9999]",
        "flex w-[380px] flex-col gap-3",
      )}
    >
      {toasts.map(
        (toast) => (
          <Toast
            key={toast.id}
            toast={toast}
          >
            {toast.title && (
              <ToastTitle>
                {toast.title}
              </ToastTitle>
            )}

            {toast.description && (
              <ToastDescription>
                {toast.description}
              </ToastDescription>
            )}

            {toast.action}

            <button
              className="absolute inset-0"
              aria-hidden
              onClick={() =>
                remove(
                  toast.id,
                )
              }
            />
          </Toast>
        ),
      )}
    </div>
  );
};

export default ToastContainer;