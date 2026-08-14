export function isActiveTab(
  currentValue: string,
  tabValue: string,
): boolean {
  return currentValue === tabValue;
}

export function getNextTab(
  tabs: string[],
  currentValue: string,
): string {
  const index =
    tabs.indexOf(currentValue);

  if (
    index === -1 ||
    index === tabs.length - 1
  ) {
    return tabs[0] ?? "";
  }

  return tabs[index + 1];
}

export function getPreviousTab(
  tabs: string[],
  currentValue: string,
): string {
  const index =
    tabs.indexOf(currentValue);

  if (index <= 0) {
    return (
      tabs[tabs.length - 1] ?? ""
    );
  }

  return tabs[index - 1];
}