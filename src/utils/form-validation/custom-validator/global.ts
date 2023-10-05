import * as z from "zod";

const maxFileSize = 5 * 1024;
const maxFileSizeInMb = 5;
const maxImageSize = 1 * 1024;
const maxImageSizeInMb = 1;

const longMaxChar = 250;
const shortMaxChar = 20;

export const zLatestYear = z
  .number()
  .min(1900, { message: "Invalid year" })
  .max(new Date().getFullYear(), { message: "Invalid year" });

export const zDate = z.date({ invalid_type_error: "Invalid date" }).optional();

export const zRequiredDate = z.date({
  invalid_type_error: "Invalid date",
  required_error: "Required",
});

export const zString = z
  .string({
    required_error: "Required",
    invalid_type_error: "Required",
  })
  .optional();

export const zRequiredString = z
  .string({
    required_error: "Required",
    invalid_type_error: "Required",
  })
  .min(1, "Required");

export const zLongString = z
  .string()
  .max(Number(longMaxChar), `Max ${longMaxChar} characters`);

export const zRequiredLongString = z
  .string({
    required_error: "Required",
    invalid_type_error: "Required",
  })
  .min(1, "Required")
  .max(Number(longMaxChar), `Max ${longMaxChar} characters`);

export const zRequiredShortString = z
  .string({
    required_error: "Required",
    invalid_type_error: "Required",
  })
  .min(1, "Required")
  .max(Number(shortMaxChar), `Max ${shortMaxChar} characters`);

export const zShortString = z
  .string()
  .max(Number(shortMaxChar), `Max ${shortMaxChar} characters`);

export const zDateRequired = z.date({
  required_error: "Required",
  invalid_type_error: "Required",
});

export const zNumberRequired = z.number({
  required_error: "Required",
  invalid_type_error: "Required",
});

export const zImage = z
  .custom<File>()
  .refine((file) => file, { message: "Required" })
  .refine((file) => file && file.size, { message: "Required" })
  .refine((file) => file && file.size < Number(maxImageSize) - 100, {
    message: `File size must be less than ${maxImageSizeInMb} MB`,
  });

export const zFile = z
  .custom<File>()
  .refine((file) => file, { message: "Required" })
  .refine((file) => file && file.size, { message: "Required" })
  .refine((file) => file && file.size < Number(maxFileSize) - 100, {
    message: `File size must be less than ${maxFileSizeInMb} MB`,
  });

export const zEmail = zRequiredLongString
  .email("Email tidak valid")
  .max(255, "Email tidak valid");

export const zPassword = zRequiredLongString.refine((value) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(value);
}, "Password minimal 8 karakter, terdiri dari kombinasi huruf besar, huruf kecil, dan angka.");

export const zConfirmPassword = z
  .string({ required_error: "Harus diisi" })
  .min(1, "Harus diisi");
