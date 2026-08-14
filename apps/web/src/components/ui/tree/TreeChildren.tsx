import {
  forwardRef,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { cn } from "@/lib/cn";

import type {
  TreeChildrenProps,
} from "./tree.types";

const TreeChildren = forwardRef<
  HTMLUListElement,
  TreeChildrenProps
>(
  (
    {
      expanded,
      children,
      className,
    },
    ref,
  ) => {
    return (
      <AnimatePresence
        initial={false}
      >
        {expanded && (
          <motion.ul
            ref={ref}
            role="group"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.18,
            }}
            className={cn(
              "space-y-1 overflow-hidden",
              className,
            )}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    );
  },
);

TreeChildren.displayName =
  "TreeChildren";

export default TreeChildren;