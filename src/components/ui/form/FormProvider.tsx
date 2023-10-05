import { Button } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import { FormProvider } from "./useFormContext";

type Props = {
  children: React.ReactNode;
  form: UseFormReturnType<any, (values: any) => any>;
  onSubmit: () => void;
};

export function MyFormProvider(props: Props) {
  return (
    <FormProvider form={props.form}>
      <form onSubmit={props.form.onSubmit(props.onSubmit)}>
        {props.children}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
