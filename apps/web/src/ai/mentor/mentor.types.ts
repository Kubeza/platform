export type MentorIntent =
  | "hint"
  | "explain"
  | "investigate"
  | "next-step"
  | "general";

export type MentorContext = {
  labId: string;
  labTitle: string;
  objective: string;
  currentStep: number;
  totalSteps: number;
  lastCommand?: string;
  lastOutput?: string;
};

export type MentorRequest = {
  message: string;
  context: MentorContext;
};

export type MentorResponse = {
  intent: MentorIntent;
  message: string;
  suggestedCommand?: string;
  shouldRevealSolution: boolean;
};