export function clampSliderValue(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(
    Math.max(value, min),
    max,
  );
}

export function getSliderPercentage(
  value: number,
  min: number,
  max: number,
): number {
  if (max <= min) {
    return 0;
  }

  return (
    ((value - min) / (max - min)) *
    100
  );
}

export function getSliderValueFromPercentage(
  percentage: number,
  min: number,
  max: number,
): number {
  const clamped = Math.min(
    Math.max(percentage, 0),
    100,
  );

  return (
    min +
    ((max - min) * clamped) / 100
  );
}

export function isSliderDisabled(
  disabled: boolean,
): boolean {
  return disabled;
}