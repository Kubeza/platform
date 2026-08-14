import {
  forwardRef,
  useImperativeHandle,
} from "react";

import { useUpload } from "./useUpload";

interface UploadInputProps {
  multiple?: boolean;

  accept?: string;
}

export const UploadInput =
  forwardRef<
    HTMLInputElement,
    UploadInputProps
  >(function UploadInput(
    {
      multiple = false,
      accept,
    },
    ref,
  ) {
    const {
      inputRef,
      addFiles,
    } = useUpload();

    useImperativeHandle(
      ref,
      () =>
        inputRef.current as HTMLInputElement,
      [inputRef],
    );

    return (
      <input
        ref={inputRef}
        hidden
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={(
          event,
        ) => {
          if (
            event.target.files
          ) {
            addFiles(
              event.target.files,
            );

            event.target.value =
              "";
          }
        }}
      />
    );
  });