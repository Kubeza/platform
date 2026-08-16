import {
  useCallback,
  useMemo,
  useState,
} from "react";

export type LabStepStatus =
  | "locked"
  | "active"
  | "completed";

export interface LabStep {
  id: number;
  title: string;
  description: string;
  status: LabStepStatus;
}

interface CommandResult {
  command: string;
  output?: string;
}

const initialSteps: LabStep[] = [
  {
    id: 1,
    title: "Look at the problem",
    description:
      "Find out why Nginx stopped working.",
    status: "active",
  },
  {
    id: 2,
    title: "Find the mistake",
    description:
      "Locate the broken part of the configuration.",
    status: "locked",
  },
  {
    id: 3,
    title: "Fix it",
    description:
      "Make the smallest safe change.",
    status: "locked",
  },
  {
    id: 4,
    title: "Bring it back",
    description:
      "Test the fix and start Nginx again.",
    status: "locked",
  },
];

function updateSteps(
  completedThrough: number,
): LabStep[] {
  return initialSteps.map((step) => {
    if (step.id <= completedThrough) {
      return {
        ...step,
        status: "completed",
      };
    }

    if (
      step.id ===
      completedThrough + 1
    ) {
      return {
        ...step,
        status: "active",
      };
    }

    return {
      ...step,
      status: "locked",
    };
  });
}

export function useLabProgress() {
  const [steps, setSteps] =
    useState<LabStep[]>(initialSteps);

  const [currentStep, setCurrentStep] =
    useState(1);

  const [labComplete, setLabComplete] =
    useState(false);

  const processCommand = useCallback(
    ({ command, output }: CommandResult) => {
      const normalized =
        command.trim().toLowerCase();

      const result =
        output?.toLowerCase() ?? "";

      if (
        normalized ===
          "systemctl status nginx" &&
        result.includes("active: failed")
      ) {
        setSteps(updateSteps(1));
        setCurrentStep(2);
        return;
      }

      if (
        normalized === "nginx -t" &&
        result.includes(
          "configuration file /etc/nginx/nginx.conf test failed",
        )
      ) {
        setSteps(updateSteps(2));
        setCurrentStep(3);
        return;
      }

      if (
        normalized.includes("nginx.conf") &&
        (
          normalized.includes("sed -i") ||
          normalized.includes("nano") ||
          normalized.includes("vim")
        )
      ) {
        setSteps(updateSteps(3));
        setCurrentStep(4);
        return;
      }

      if (
        normalized === "nginx -t" &&
        result.includes(
          "test is successful",
        )
      ) {
        setSteps(updateSteps(3));
        setCurrentStep(4);
        return;
      }

      if (
        normalized ===
          "systemctl restart nginx" &&
        output === undefined
      ) {
        setSteps(
          initialSteps.map((step) => ({
            ...step,
            status: "completed",
          })),
        );

        setCurrentStep(4);
        setLabComplete(true);
      }
    },
    [],
  );

  const resetProgress = useCallback(() => {
    setSteps(initialSteps);
    setCurrentStep(1);
    setLabComplete(false);
  }, []);

  const completedCount = useMemo(
    () =>
      steps.filter(
        (step) =>
          step.status === "completed",
      ).length,
    [steps],
  );

  const progressPercent = useMemo(
    () =>
      Math.round(
        (completedCount /
          steps.length) *
          100,
      ),
    [completedCount, steps.length],
  );

  return {
    steps,
    currentStep,
    completedCount,
    progressPercent,
    isComplete: labComplete,
    processCommand,
    resetProgress,
  };
}