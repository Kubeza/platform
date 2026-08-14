"use client";

import {
  ChevronDown,
  FileText,
  Folder,
  Settings,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleProvider,
  CollapsibleTrigger,
} from ".";

export default function CollapsibleExamples() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Default Collapsible
        </h2>

        <CollapsibleProvider>
          <Collapsible className="rounded-lg border">
            <CollapsibleTrigger>
              Project Information
            </CollapsibleTrigger>

            <CollapsibleContent>
              The DevOps AI Lab provides
              interactive infrastructure labs,
              cloud-native workflows, and AI-powered
              guidance for hands-on learning.
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleProvider>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Initially Open
        </h2>

        <CollapsibleProvider defaultOpen>
          <Collapsible className="rounded-lg border">
            <CollapsibleTrigger>
              Environment Details
            </CollapsibleTrigger>

            <CollapsibleContent>
              Ubuntu 24.04, Docker, Kubernetes,
              Terraform, PostgreSQL, and GitHub
              Actions are configured.
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleProvider>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Icon Layout
        </h2>

        <CollapsibleProvider>
          <Collapsible className="rounded-lg border">
            <CollapsibleTrigger>
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Labs
              </span>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Docker
                </li>

                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Kubernetes
                </li>

                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Terraform
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleProvider>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Custom Trigger
        </h2>

        <CollapsibleProvider>
          <Collapsible className="rounded-lg border">
            <CollapsibleTrigger>
              <div className="flex w-full items-center justify-between">
                <span className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Advanced Settings
                </span>

                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              Configure deployment behavior,
              feature flags, monitoring, logging,
              and runtime options.
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleProvider>
      </section>
    </div>
  );
}