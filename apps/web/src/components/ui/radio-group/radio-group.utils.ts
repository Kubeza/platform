export function isRadioSelected(
  currentValue: string,
  itemValue: string,
): boolean {
  return currentValue === itemValue;
}

export function getRadioGroupState(
  value: string,
  disabled: boolean,
) {
  return {
    value,
    disabled,
  };
}

export function getNextRadioValue(
  value: string,
): string {
  return value;
}