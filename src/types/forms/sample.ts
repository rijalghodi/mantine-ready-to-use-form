export type SampleFormValues = {
  name: string;
  email: string;
  gender?: string;
  address?: string;
  photo: File | null;
  birthDate?: string;
  phoneNumber: number | null;
};
