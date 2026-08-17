import type {
  MentorIntent,
  MentorRequest,
  MentorResponse,
} from "./mentor.types";

function detectIntent(message: string): MentorIntent {
  const normalized = message.toLowerCase();

  if (
    normalized.includes("hint") ||
    normalized.includes("stuck") ||
    normalized.includes("help me")
  ) {
    return "hint";
  }

  if (
    normalized.includes("explain") ||
    normalized.includes("what does") ||
    normalized.includes("why")
  ) {
    return "explain";
  }

  if (
    normalized.includes("what should i do") ||
    normalized.includes("next") ||
    normalized.includes("where do i start")
  ) {
    return "next-step";
  }

  if (
    normalized.includes("check") ||
    normalized.includes("investigate") ||
    normalized.includes("diagnose")
  ) {
    return "investigate";
  }

  return "general";
}

function getStepMessage(
  request: MentorRequest,
): string {
  const {
    currentStep,
    totalSteps,
    lastCommand,
    lastOutput,
  } = request.context;

  if (lastCommand && lastOutput) {
    return `You are on step ${currentStep} of ${totalSteps}. Start from the evidence produced by \`${lastCommand}\`. Read the output carefully before making a change.`;
  }

  return `You are on step ${currentStep} of ${totalSteps}. Begin by gathering evidence from the environment rather than changing configuration immediately.`;
}

export function createMentorResponse(
  request: MentorRequest,
): MentorResponse {
  const intent = detectIntent(request.message);

  switch (intent) {
    case "hint":
      return {
        intent,
        message:
          "Use the evidence already available to narrow the failure. Check the service state or validate the configuration before changing anything.",
        shouldRevealSolution: false,
      };

    case "explain":
      return {
        intent,
        message:
          "Focus on the relationship between the command you ran and the failure it reported. The error message is evidence about where to investigate next.",
        shouldRevealSolution: false,
      };

    case "investigate":
      return {
        intent,
        message:
          "Investigate the current failure first. Check service status, validate the configuration, and inspect only the relevant part of the system.",
        shouldRevealSolution: false,
      };

    case "next-step":
      return {
        intent,
        message: getStepMessage(request),
        shouldRevealSolution: false,
      };

    default:
      return {
        intent,
        message:
          "I can help you reason through the failure without solving the lab for you. Tell me what you observed in the terminal and we can determine the next investigation step.",
        shouldRevealSolution: false,
      };
  }
}