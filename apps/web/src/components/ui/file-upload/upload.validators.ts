import type {
  UploadOptions,
} from "./upload.types";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateFile(
  file: File,
  options: UploadOptions = {},
): ValidationResult {
  const {
    accept,
    maxFileSize,
  } = options;

  if (
    maxFileSize &&
    file.size > maxFileSize
  ) {
    return {
      valid: false,
      error: `File size exceeds ${maxFileSize} bytes.`,
    };
  }

  if (accept) {
    const allowed = accept
      .split(",")
      .map((value) =>
        value.trim(),
      );

    const valid = allowed.some(
      (type) => {
        if (type === "*") {
          return true;
        }

        if (
          type.endsWith("/*")
        ) {
          return file.type.startsWith(
            type.replace(
              "/*",
              "/",
            ),
          );
        }

        if (
          type.startsWith(".")
        ) {
          return file.name
            .toLowerCase()
            .endsWith(
              type.toLowerCase(),
            );
        }

        return (
          file.type === type
        );
      },
    );

    if (!valid) {
      return {
        valid: false,
        error:
          "Unsupported file type.",
      };
    }
  }

  return {
    valid: true,
  };
}

export function validateFiles(
  files: File[],
  options: UploadOptions = {},
): ValidationResult {
  const {
    maxFiles,
  } = options;

  if (
    maxFiles &&
    files.length > maxFiles
  ) {
    return {
      valid: false,
      error: `Maximum ${maxFiles} files allowed.`,
    };
  }

  for (const file of files) {
    const result =
      validateFile(
        file,
        options,
      );

    if (!result.valid) {
      return result;
    }
  }

  return {
    valid: true,
  };
}