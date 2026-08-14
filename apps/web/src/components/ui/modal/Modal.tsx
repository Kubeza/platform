import { forwardRef } from "react";

import ModalContent from "./ModalContent";
import ModalOverlay from "./ModalOverlay";

import { useModal } from "./hooks";

import type {
  ModalProps,
} from "./modal.types";

const Modal = forwardRef<
  HTMLDivElement,
  ModalProps
>(
  (
    {
      open,
      onClose,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    useModal(
      open,
      onClose,
    );

    if (!open) {
      return null;
    }

    return (
      <ModalOverlay
        onClick={onClose}
      >
        <ModalContent
          ref={ref}
          className={className}
          onClick={(event) =>
            event.stopPropagation()
          }
          {...props}
        >
          {children}
        </ModalContent>
      </ModalOverlay>
    );
  },
);

Modal.displayName =
  "Modal";

export default Modal;