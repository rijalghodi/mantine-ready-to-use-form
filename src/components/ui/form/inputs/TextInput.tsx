import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from "@mantine/core";

import FieldErrorMessage from "../FieldErrorMessage";
import { useFormContext } from "../useFormContext";

export type TextInputProps = {
  name: string;
} & Omit<MantineTextInputProps, "name">;

export function TextInput(props: TextInputProps) {
  const form = useFormContext();

  return (
    <MantineTextInput
      {...props}
      {...form.getInputProps(props.name as string)}
      error={
        form.getInputProps(props.name).error && (
          <FieldErrorMessage>
            {form.getInputProps(props.name).error}
          </FieldErrorMessage>
        )
      }
    />
  );
}
