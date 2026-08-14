import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import ToastContainer from "./ToastContainer";

import {
  useToast,
} from "./hooks";

import type {
  ToastContextValue,
} from "./toast.types";

const ToastContext =
  createContext<
    ToastContextValue | undefined
  >(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  const toast =
    useToast();

  return (
    <ToastContext.Provider
      value={toast}
    >
      {children}

      <ToastContainer
        toasts={
          toast.toasts
        }
        remove={
          toast.remove
        }
      />
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context =
    useContext(
      ToastContext,
    );

  if (!context) {
    throw new Error(
      "useToastContext must be used within ToastProvider",
    );
  }

  return context;
}