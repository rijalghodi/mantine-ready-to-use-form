import { z } from "zod";

import {
  zEmail,
  zImage,
  zLongString,
  zNumberRequired,
  zString,
} from "./custom-validator/global";

export const sampleFormSchema = z.object({
  name: zLongString,
  email: zEmail,
  gender: zString,
  address: zString,
  photo: zImage,
  birthDate: zString,
  phoneNumber: zNumberRequired,
});
