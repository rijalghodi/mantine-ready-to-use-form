import { Box, Container, Group, Paper, Title } from "@mantine/core";

import { useForm } from "@/components/ui";

import { sampleFormControllers } from "@/utils/form-controllers/sample";
import { sampleFormSchema } from "@/utils/form-validation/sample";

import { SampleFormValues } from "@/types/forms/sample";

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export function SampleForm() {
  const [Form, methods] = useForm<SampleFormValues>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      birthDate: "",
      gender: "",
      phoneNumber: null,
      photo: null,
    },
    schema: sampleFormSchema,
    controllers: sampleFormControllers,
    onSubmit: async (values, ctx) => {
      console.log(values); // eslint-disable-line no-console
      await sleep(1000);
      ctx.setError(
        "phoneNumber",
        { message: "Invalid phone number" },
        { shouldFocus: false },
      );
    },
  });

  const {
    formState: { isSubmitting },
  } = methods;

  return (
    <Container size={1200} my={40}>
      <Title align="center" order={1} fw={700}>
        Sample Form
      </Title>
      <Group noWrap>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Title order={2} mb={20} align="center">
            With Render Props
          </Title>
          {/* eslint-disable @typescript-eslint/no-shadow */}
          <Form grid={{ gutter: "xs" }}>
            {({ formState: { isSubmitting } }) => (
              <Box mt={25}>
                <Form.Button
                  fullWidth
                  mt="xl"
                  loading={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Form.Button>
              </Box>
            )}
          </Form>
        </Paper>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Title order={2} mb={20} align="center">
            With Returned Methods
          </Title>
          <Form grid={{ gutter: "xs" }} />
          <Box mt={25}>
            <Form.Button fullWidth mt="xl" loading={isSubmitting} type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Form.Button>
          </Box>
        </Paper>
      </Group>
    </Container>
  );
}
