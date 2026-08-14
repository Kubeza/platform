import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/cn";

interface AlertDialogContextValue {
  onClose: () => void;
}

const AlertDialogContext =
  createContext<AlertDialogContextValue | null>(null);

export interface AlertDialogProps
  extends Omit<
    HTMLMotionProps<"div">,
    "title"
  > {
  open: boolean;

  onClose: () => void;

  heading?: ReactNode;

  children: ReactNode;

  closeOnOverlayClick?: boolean;

  showCloseButton?: boolean;
}

export function useAlertDialog() {
  const context = useContext(AlertDialogContext);

  if (!context) {
    throw new Error(
      "AlertDialog components must be used inside AlertDialog.",
    );
  }

  return context;
}

export default function AlertDialog({
  open,
  onClose,
  heading,
  children,
  className,
  closeOnOverlayClick = true,
  showCloseButton = true,
  ...props
}: AlertDialogProps) {
  const dialogRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handler,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handler,
      );
    };
  }, [open, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (closeOnOverlayClick) {
              onClose();
            }
          }}
        >
          <AlertDialogContext.Provider
            value={{ onClose }}
          >
            <motion.div
              ref={dialogRef}
              role="alertdialog"
              aria-modal="true"
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 16,
              }}
              transition={{
                duration: 0.2,
              }}
              className={cn(
                "relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl",
                className,
              )}
              onClick={(event) =>
                event.stopPropagation()
              }
              {...props}
            >
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              )}

              {heading && (
                <div className="border-b border-slate-800 px-6 py-4">
                  <h2 className="text-lg font-semibold text-white">
                    {heading}
                  </h2>
                </div>
              )}

              {children}
            </motion.div>
          </AlertDialogContext.Provider>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}