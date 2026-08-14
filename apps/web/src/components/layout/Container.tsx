import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "../../lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export default function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>): React.JSX.Element {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}