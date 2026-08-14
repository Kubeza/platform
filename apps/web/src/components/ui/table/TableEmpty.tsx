import {
  EMPTY_MESSAGE,
} from "./constants";

import type {
  TableEmptyProps,
} from "./table.types";

const TableEmpty = ({
  message,
  colSpan,
}: TableEmptyProps) => {
  return (
    <tbody>
      <tr>
        <td
          colSpan={
            colSpan
          }
          className="px-6 py-12 text-center text-sm text-muted-foreground"
        >
          {message ??
            EMPTY_MESSAGE}
        </td>
      </tr>
    </tbody>
  );
};

export default TableEmpty;