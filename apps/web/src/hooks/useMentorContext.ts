import type {
  LabDefinition,
} from "../labs/types";

import type {
  MentorContext,
} from "../ai/mentor";

interface UseMentorContextOptions {
  lab: LabDefinition;
  currentStep: number;
  lastCommand?: string;
  lastOutput?: string;
}

export function useMentorContext({
  lab,
  currentStep,
  lastCommand,
  lastOutput,
}: UseMentorContextOptions): MentorContext {
  return {
    labId: lab.id,
    labTitle: lab.title,
    objective: lab.objective,
    currentStep,
    totalSteps: lab.steps.length,
    lastCommand,
    lastOutput,
  };
}