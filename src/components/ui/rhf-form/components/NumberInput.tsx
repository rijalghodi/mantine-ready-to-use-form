import { NumberInput as MantineNumberInput } from "@mantine/core";
import { useController } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import { NumberInputProps } from "../types";

function NumberInput(props: NumberInputProps) {
  const { label, name, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
    formState: { defaultValues },
  } = useController({ name });

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  const { onChange, ...restField } = field;

  return (
    <MantineNumberInput
      id={name}
      label={label}
      onChange={(value) => {
        if (value === "") {
          /**
           * @see https://mantine.dev/core/number-input/#input-value-type
           */
          onChange(defaultValues?.[name] || "");
        } else {
          onChange(value);
        }
      }}
      error={error}
      {...rest}
      {...restField}
    />
  );
}

export default NumberInput;
