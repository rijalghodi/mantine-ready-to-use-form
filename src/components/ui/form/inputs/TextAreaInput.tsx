import {
  Textarea as MantineTextArea,
  TextareaProps as MantineTextAreaProps,
} from "@mantine/core";
import * as React from "react";

import { useFormContext } from "..";

export type TextAreaInputProps = {
  name: string;
} & Omit<MantineTextAreaProps, "name">;

export function TextAreaInput(props: MantineTextAreaProps) {
  const form = useFormContext();

  return (
    <MantineTextArea
      {...form.getInputProps(props.name as string)}
      radius={8}
      labelProps={{ style: { fontWeight: 600 } }}
      descriptionProps={{ style: { fontWeight: 400, fontSize: 10 } }}
      autosize
      minRows={4}
      maxRows={4}
      {...props}
    />
  );
}
