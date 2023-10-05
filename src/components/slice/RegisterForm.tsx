import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";

import { MyFormProvider } from "../ui/form/FormProvider";
import { TextInput } from "../ui/form/inputs/TextInput";

export function RegisterForm() {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <MyFormProvider form={form} onSubmit={() => {}}>
      <TextInput label="Email" name="email" />
      <Button onClick={() => form.setErrors({ email: "Haloo Errorrr" })}>
        Set Error
      </Button>
    </MyFormProvider>
  );
}
