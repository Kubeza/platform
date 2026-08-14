interface DataGridFilterProps {
  value?: string;

  placeholder?: string;

  options: {
    label: string;
    value: string;
  }[];

  onValueChange(value: string): void;
}

export default function DataGridFilter({
  value,
  placeholder = "Filter",
  options,
  onValueChange,
}: DataGridFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onValueChange(e.target.value)
      }
      className="h-10 rounded-md border bg-background px-3 text-sm"
    >
      <option value="">
        {placeholder}
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}