import { TextInput as MantineTextInput } from "@mantine/core";
import { useController } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import { TextInputProps } from "../types";

function TextInput(props: TextInputProps) {
  const { label, name, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name });

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  return (
    <MantineTextInput
      id={name}
      label={label}
      error={error}
      {...rest}
      {...field}
    />
  );
}

export default TextInput;
