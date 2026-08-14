import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import TreeIcon from "./TreeIcon";
import TreeLabel from "./TreeLabel";
import TreeToggle from "./TreeToggle";

import { useTree } from "./Tree";

import type {
  TreeItemProps,
} from "./tree.types";

const TreeItem = forwardRef<
  HTMLDivElement,
  TreeItemProps
>(
  (
    {
      node,
      level,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      expandedNodes,
      selectedNodes,
      toggleNode,
      selectNode,
    } = useTree();

    const expanded =
      expandedNodes.has(
        node.id,
      );

    const selected =
      selectedNodes.has(
        node.id,
      );

    const hasChildren =
      Boolean(
        node.children?.length,
      );

    return (
      <div
        ref={ref}
        role="presentation"
        className={cn(
          "flex h-9 items-center gap-2 rounded-md px-2 transition-colors",

          selected &&
            "bg-indigo-500/15 text-indigo-300",

          !selected &&
            "hover:bg-slate-900",

          node.disabled &&
            "cursor-not-allowed opacity-50",

          className,
        )}
        style={{
          paddingLeft: `${
            level * 16
          }px`,
        }}
        onClick={() => {
          if (
            node.disabled
          ) {
            return;
          }

          selectNode(
            node.id,
          );
        }}
        {...props}
      >
        <TreeToggle
          expanded={
            expanded
          }
          hasChildren={
            hasChildren
          }
          onClick={(
            event,
          ) => {
            event.stopPropagation();

            if (
              hasChildren
            ) {
              toggleNode(
                node.id,
              );
            }
          }}
        />

        <TreeIcon
          icon={node.icon}
          expanded={
            expanded
          }
          loading={
            node.loading
          }
        />

        <TreeLabel>
          {node.label}
        </TreeLabel>
      </div>
    );
  },
);

TreeItem.displayName =
  "TreeItem";

export default TreeItem;