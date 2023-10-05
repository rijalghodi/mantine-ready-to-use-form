/* eslint-disable unused-imports/no-unused-vars */
import { Select, SelectProps } from "@mantine/core";
import * as React from "react";

import FieldErrorMessage from "../FieldErrorMessage";
import { useFormContext } from "../useFormContext";

export type SelectInputProps = {
  name: string;
} & Omit<SelectProps, "name">;

export function SelectInput(props: SelectInputProps) {
  const form = useFormContext();

  return (
    <Select
      {...props}
      {...form.getInputProps(props.name as string)}
      radius={8}
      labelProps={{ style: { fontWeight: 600 } }}
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

export default SelectInput;
