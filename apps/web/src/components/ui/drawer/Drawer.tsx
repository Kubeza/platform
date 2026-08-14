import { forwardRef } from "react";

import DrawerContent from "./DrawerContent";
import DrawerOverlay from "./DrawerOverlay";

import { useDrawer } from "./hooks";

import type {
  DrawerProps,
} from "./drawer.types";

const Drawer = forwardRef<
  HTMLDivElement,
  DrawerProps
>(
  (
    {
      open,
      onClose,
      children,
      position = "right",
      className,
      ...props
    },
    ref,
  ) => {
    useDrawer(
      open,
      onClose,
    );

    if (!open) {
      return null;
    }

    return (
      <DrawerOverlay
        onClick={onClose}
      >
        <DrawerContent
          ref={ref}
          position={position}
          className={className}
          onClick={(event) =>
            event.stopPropagation()
          }
          {...props}
        >
          {children}
        </DrawerContent>
      </DrawerOverlay>
    );
  },
);

Drawer.displayName =
  "Drawer";

export default Drawer;