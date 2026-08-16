export type LabDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type GuidedActionIcon =
  | "check"
  | "test"
  | "file";

export interface LabEnvironment {
  operatingSystem: string;
  session: string;
}

export interface LabStepDefinition {
  id: number;
  title: string;
  description: string;
}

export interface LabGuidedAction {
  id: string;
  title: string;
  description: string;
  icon: GuidedActionIcon;
  command: string;
}

export interface LabDefinition {
  id: string;
  slug: string;
  number: string;

  title: string;
  objective: string;
  difficulty: LabDifficulty;

  environment: LabEnvironment;

  steps: LabStepDefinition[];

  successCondition: string;

  guidedActions: LabGuidedAction[];
}
