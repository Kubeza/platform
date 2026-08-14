import type { ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section">;

export default function Section({
  className,
  ...props
}: SectionProps): React.JSX.Element {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24 lg:py-32",
        className,
      )}
      {...props}
    />
  );
}