"use client";

import {
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";

import {
  AlertTriangle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./error-boundary.types";

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(
    error: Error,
  ): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo,
  ) {
    this.props.onError?.(
      error,
      errorInfo,
    );
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  public render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.fallback) {
      return this.props.fallback;
    }

    return (
      <div
        role="alert"
        className={cn(
          "flex min-h-40 w-full flex-col items-center justify-center gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center",
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-sm font-semibold">
            Something went wrong
          </h2>

          <p className="max-w-md text-sm text-muted-foreground">
            This section could not be rendered.
            Try again or reload the page.
          </p>
        </div>

        <button
          type="button"
          onClick={this.handleReset}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          Try again
        </button>
      </div>
    );
  }
}