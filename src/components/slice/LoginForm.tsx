import { useForm } from "@mantine/form";

import { MyFormProvider } from "../ui/form/FormProvider";
import { TextInput } from "../ui/form/inputs/TextInput";

type LoginValues = {
  name: string;
};
export function LoginForm() {
  const form = useForm<LoginValues>({
    initialValues: {
      name: "",
    },
  });

  return (
    <MyFormProvider form={form} onSubmit={() => {}}>
      <TextInput label="Name" name="name" />
    </MyFormProvider>
  );
}
