import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/cn";

import TreeNode from "./TreeNode";

import type {
  TreeContextValue,
  TreeProps,
} from "./tree.types";

const TreeContext =
  createContext<TreeContextValue | null>(
    null,
  );

export function useTree() {
  const context =
    useContext(TreeContext);

  if (!context) {
    throw new Error(
      "Tree components must be used inside Tree.",
    );
  }

  return context;
}

const Tree = forwardRef<
  HTMLDivElement,
  TreeProps
>(
  (
    {
      nodes,
      className,
      initialExpanded = [],
initialSelected = [],
      multiSelect = false,
      onToggle,
      onSelectionChange,
      ...props
    },
    ref,
  ) => {
    const [
      expandedNodes,
      setExpandedNodes,
    ] = useState(
      () =>
        new Set(initialExpanded)
    );

    const [
      selectedNodes,
      setSelectedNodes,
    ] = useState(
      () =>
        new Set(initialSelected)
    );

    const toggleNode = (
      id: string,
    ) => {
      setExpandedNodes(
        (previous) => {
          const next =
            new Set(
              previous,
            );

          if (
            next.has(id)
          ) {
            next.delete(
              id,
            );
          } else {
            next.add(
              id,
            );
          }

          onToggle?.(
            id,
            next.has(id),
          );

          return next;
        },
      );
    };

    const selectNode = (
      id: string,
    ) => {
      setSelectedNodes(
        () => {
          const next =
            multiSelect
              ? new Set(
                  selectedNodes,
                )
              : new Set<
                  string
                >();

          if (
            multiSelect
          ) {
            if (
              next.has(
                id,
              )
            ) {
              next.delete(
                id,
              );
            } else {
              next.add(
                id,
              );
            }
          } else {
            next.add(id);
          }

          onSelectionChange?.([
  ...next,
]);

          return next;
        },
      );
    };

    const value =
      useMemo(
        () => ({
          expandedNodes,
          selectedNodes,
          toggleNode,
          selectNode,
          multiSelect,
        }),
        [
          expandedNodes,
          selectedNodes,
          multiSelect,
        ],
      );

    return (
      <TreeContext.Provider
        value={value}
      >
        <div
          ref={ref}
          role="tree"
          className={cn(
            "rounded-xl border border-slate-800 bg-slate-950 p-2",
            className,
          )}
          {...props}
        >
          <ul className="space-y-1">
            {nodes.map(
              (node) => (
                <TreeNode
                  key={
                    node.id
                  }
                  node={
                    node
                  }
                  level={
                    1
                  }
                />
              ),
            )}
          </ul>
        </div>
      </TreeContext.Provider>
    );
  },
);

Tree.displayName =
  "Tree";

export default Tree;