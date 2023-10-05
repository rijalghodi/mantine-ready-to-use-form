/* eslint-disable unused-imports/no-unused-vars */
import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
import * as React from "react";

import { useFormContext } from "..";

export type DateInputProps = {
  name: string;
} & Omit<DatePickerInputProps, "name">;

export function DateInput(props: DatePickerInputProps) {
  const form = useFormContext();

  return (
    <DatePickerInput
      {...props}
      {...form.getInputProps(props.name as string)}
      locale="id"
      valueFormat="DD MMMM YYYY"
      radius={8}
      labelProps={{ style: { fontWeight: 600 } }}
    />
  );
}
