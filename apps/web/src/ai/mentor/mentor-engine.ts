import {
  createMentorResponse,
} from "./mentor.rules";

import type {
  MentorRequest,
  MentorResponse,
} from "./mentor.types";

export class MentorEngine {
  respond(
    request: MentorRequest,
  ): MentorResponse {
    return createMentorResponse(request);
  }
}

export const mentorEngine =
  new MentorEngine();