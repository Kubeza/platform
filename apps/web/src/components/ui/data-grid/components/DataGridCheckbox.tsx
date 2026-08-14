import type { ChangeEvent } from "react";

interface DataGridCheckboxProps {
  checked: boolean;
  onCheckedChange(checked: boolean): void;
}

export default function DataGridCheckbox({
  checked,
  onCheckedChange,
}: DataGridCheckboxProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    onCheckedChange(event.target.checked);
  }

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className="h-4 w-4 cursor-pointer rounded border-gray-300"
    />
  );
}