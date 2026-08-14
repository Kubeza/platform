import {
  LOADING_ROWS,
} from "./constants";

const TableLoading = () => {
  return (
    <tbody>
      {Array.from({
        length:
          LOADING_ROWS,
      }).map((_, index) => (
        <tr key={index}>
          <td
            colSpan={100}
            className="px-4 py-4"
          >
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableLoading;