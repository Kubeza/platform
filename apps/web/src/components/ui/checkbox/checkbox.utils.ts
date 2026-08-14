export function toggleCheckbox(
  checked: boolean,
): boolean {
  return !checked;
}

export function isCheckboxChecked(
  checked: boolean,
): boolean {
  return checked;
}

export function getCheckboxState(
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