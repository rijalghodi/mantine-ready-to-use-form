import { FileInput as MantineFileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useController } from "react-hook-form";

import ValueComponent from "./ValueComponent";
import ErrorMessage from "../ErrorMessage";
import { FileInputProps } from "../../types";

function FileInput(props: FileInputProps<boolean>) {
  const { label, name, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name });

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  return (
    <MantineFileInput
      label={label}
      icon={<IconUpload size={14} />}
      valueComponent={ValueComponent}
      error={error}
      {...rest}
      {...field}
    />
  );
}

export default FileInput;
