import { Textarea as MantineTextarea } from "@mantine/core";
import { useController } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import { TextareaProps } from "../types";

function Textarea(props: TextareaProps) {
  const { label, name, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name });

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  return (
    <MantineTextarea
      id={name}
      label={label}
      error={error}
      {...rest}
      {...field}
    />
  );
}

export default Textarea;
