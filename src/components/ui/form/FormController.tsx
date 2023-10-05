import * as React from "react";
import "dayjs/locale/id";

import {
  DateInput,
  DateInputProps,
  PasswordInput,
  PasswordInputProps,
  SelectInput,
  SelectInputProps,
  TextAreaInput,
  TextAreaInputProps,
  TextInput,
  TextInputProps,
} from ".";

export type FormControllerProps =
  | ({ control: "select" } & SelectInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: "text-input" } & TextInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({
      control: "password-input";
      displaydesc?: "unset" | "none";
    } & PasswordInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: "date-input" } & DateInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: "text-area" } & TextAreaInputProps &
      React.RefAttributes<HTMLTextAreaElement>);

export function FormController(props: FormControllerProps) {
  const { control } = props;
  switch (control) {
    case "select":
      return <SelectInput {...props} />;
    case "text-input":
      return <TextInput {...props} />;
    case "password-input":
      return <PasswordInput {...props} />;
    case "date-input":
      return <DateInput {...props} />;
    case "text-area":
      return <TextAreaInput {...props} />;
    default:
      return null;
  }
}
