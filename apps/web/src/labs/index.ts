import { nginxLab } from "./nginx";

import type { LabDefinition } from "./types";

export const labs: LabDefinition[] = [
  nginxLab,
];

export const labsBySlug: Record<
  string,
  LabDefinition
> = Object.fromEntries(
  labs.map((lab) => [
    lab.slug,
    lab,
  ]),
);

export function getLabBySlug(
  slug: string,
): LabDefinition | undefined {
  return labsBySlug[slug];
}