"use client";

import {
  ChevronRight,
  Folder,
  Home,
  MoreHorizontal,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbProvider,
  BreadcrumbSeparator,
} from ".";

import type { BreadcrumbItemData } from "./breadcrumb.types";

const items: BreadcrumbItemData[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: <Folder className="h-4 w-4" />,
  },
  {
    id: "devops-ai-lab",
    label: "DevOps AI Lab",
    href: "/projects/devops-ai-lab",
  },
  {
    id: "ui",
    label: "UI",
    href: "/projects/devops-ai-lab/ui",
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb",
    current: true,
  },
];

export default function BreadcrumbExamples() {
  return (
    <BreadcrumbProvider items={items}>
      <div className="space-y-10 rounded-lg border p-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            Standard Breadcrumb
          </h2>

          <Breadcrumb>
            <BreadcrumbList>
              {items.map((item, index) => (
                <BreadcrumbItem key={item.id}>
                  {item.current ? (
                    <BreadcrumbPage>
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>
                      <span className="inline-flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                    </BreadcrumbLink>
                  )}

                  {index < items.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            Collapsed Breadcrumb
          </h2>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/ui">
                  UI
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            Custom Separator
          </h2>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <MoreHorizontal className="h-4 w-4" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Current
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </BreadcrumbProvider>
  );
}