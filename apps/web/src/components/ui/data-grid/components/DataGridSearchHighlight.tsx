interface DataGridSearchHighlightProps {
  text: string;
  search: string;
}

export default function DataGridSearchHighlight({
  text,
  search,
}: DataGridSearchHighlightProps) {
  if (!search.trim()) {
    return <>{text}</>;
  }

  const escaped = search.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  const parts = text.split(
    new RegExp(`(${escaped})`, "gi"),
  );

  return (
    <>
      {parts.map((part, index) => (
        <span
          key={`${part}-${index}`}
          className={
            part.toLowerCase() ===
            search.toLowerCase()
              ? "rounded bg-yellow-200 px-0.5 dark:bg-yellow-700"
              : undefined
          }
        >
          {part}
        </span>
      ))}
    </>
  );
}