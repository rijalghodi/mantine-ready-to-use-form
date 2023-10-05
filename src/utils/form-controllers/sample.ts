import { Controllers } from "@/components/ui";

import { SampleFormValues } from "@/types/forms/sample";

export const sampleFormControllers: Controllers<SampleFormValues, any> = {
  name: {
    control: "text-input",
    label: "Account",
    name: "name",
    withAsterisk: true,
  },
  email: {
    control: "password-input",
    label: "Email",
    name: "email",
    withAsterisk: true,
  },
  phoneNumber: {
    control: "password-input",
    label: "Phone Number",
    name: "phoneNumber",
  },
  address: {
    control: "text-area",
    label: "Address",
    name: "address",
  },
  birthDate: {
    control: "date-input",
    label: "Birth Date",
    name: "birthDate",
    col: {
      span: 6,
    },
  },
  gender: {
    control: "select",
    label: "Gender",
    name: "gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    col: {
      span: 6,
    },
  },
  photo: {
    control: "file-input",
    label: "Photo",
    name: "photo",
  },
};
