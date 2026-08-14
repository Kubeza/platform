import {
  forwardRef,
} from "react";

import TreeChildren from "./TreeChildren";
import TreeItem from "./TreeItem";

import { useTree } from "./Tree";

import type {
  TreeNodeProps,
} from "./tree.types";

const TreeNode = forwardRef<
  HTMLLIElement,
  TreeNodeProps
>(
  (
    {
      node,
      level,
      ...props
    },
    ref,
  ) => {
    const {
      expandedNodes,
    } =
      useTree();

    const expanded =
      expandedNodes.has(
        node.id,
      );

    return (
      <li
        ref={ref}
        role="treeitem"
        aria-expanded={
          node.children
            ? expanded
            : undefined
        }
        {...props}
      >
        <TreeItem
          node={node}
          level={level}
        />

        {node.children && (
          <TreeChildren
            expanded={
              expanded
            }
          >
            {node.children.map(
              (
                child,
              ) => (
                <TreeNode
                  key={
                    child.id
                  }
                  node={
                    child
                  }
                  level={
                    level +
                    1
                  }
                />
              ),
            )}
          </TreeChildren>
        )}
      </li>
    );
  },
);

TreeNode.displayName =
  "TreeNode";

export default TreeNode;