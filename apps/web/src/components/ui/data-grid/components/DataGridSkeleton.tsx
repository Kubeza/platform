interface Props {
  rows?: number;
  columns?: number;
}

export default function DataGridSkeleton({
  rows = 10,
  columns = 5,
}: Props) {
  return (
    <tbody>
      {Array.from({
        length: rows,
      }).map((_, row) => (
        <tr key={row}>
          {Array.from({
            length: columns,
          }).map((__, col) => (
            <td
              key={col}
              className="p-4"
            >
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}