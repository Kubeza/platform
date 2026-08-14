export function toggleSwitch(
  checked: boolean,
): boolean {
  return !checked;
}

export function isSwitchChecked(
  checked: boolean,
): boolean {
  return checked;
}

export function getSwitchState(
  checked: boolean,
  disabled: boolean,
) {
  if (disabled) {
    return "disabled";
  }

  return checked
    ? "checked"
    : "unchecked";
}