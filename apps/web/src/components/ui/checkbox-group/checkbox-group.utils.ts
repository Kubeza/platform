export function toggleCheckboxValue(
  values: string[],
  value: string,
  checked: boolean,
): string[] {
  if (checked) {
    return values.includes(value)
      ? values
      : [...values, value];
  }

  return values.filter(
    (item) => item !== value,
  );
}

export function isCheckboxChecked(
  values: string[],
  value: string,
): boolean {
  return values.includes(value);
}

export function areAllCheckboxesChecked(
  values: string[],
  options: string[],
): boolean {
  if (options.length === 0) {
    return false;
  }

  return options.every((value) =>
    values.includes(value),
  );
}