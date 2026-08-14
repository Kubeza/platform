import {
  CLOSE_ON_ESCAPE,
  CLOSE_ON_OVERLAY_CLICK,
} from "./constants";

export function shouldCloseOnEscape() {
  return CLOSE_ON_ESCAPE;
}

export function shouldCloseOnOverlayClick() {
  return CLOSE_ON_OVERLAY_CLICK;
}