import {
  List,
  PasswordInput as MantinePasswordInput,
  TextInputProps,
} from "@mantine/core";
import * as React from "react";

import { useFormContext } from "..";
import FieldErrorMessage from "../FieldErrorMessage";

export interface PasswordInputProps extends Omit<TextInputProps, "name"> {
  displaydesc?: "unset" | "none";
  name: string;
}

export function PasswordInput(props: PasswordInputProps) {
  const { displaydesc, ...rest } = props;
  const form = useFormContext();

  return (
    <MantinePasswordInput
      {...form.getInputProps(props.name as string)}
      radius={8}
      description={
        <List
          fw={400}
          fz={10}
          styles={(theme) => ({ item: { color: theme.colors.gray[6] } })}
        >
          <List.Item>Minimal 8 karakter</List.Item>
          <List.Item>
            Kombinasi huruf (huruf besar dan huruf kecil) dan angka (0-9)
          </List.Item>
          <List.Item>Satu karakter (!@#$%^&*)</List.Item>
        </List>
      }
      descriptionProps={{ style: { display: displaydesc } }}
      labelProps={{ style: { fontWeight: 600 } }}
      // onFocus={() => field.onChange('')}
      autoComplete="new-password"
      error={
        form.getInputProps(props.name).error && (
          <FieldErrorMessage>
            {form.getInputProps(props.name).error}
          </FieldErrorMessage>
        )
      }
      {...rest}
    />
  );
}
