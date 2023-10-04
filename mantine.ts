import { MantineProviderProps } from "@mantine/core";

export const theme: MantineProviderProps["theme"] = {
  fontFamily: "Inter, sans-serif",
  spacing: {
    xl: "3.5em",
    lg: "2.5em",
    md: "2rem",
    sm: "1.5em",
    xs: "1em",
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    brand: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    neutral: [
      "#EEEEEE",
      "#E6E7EC",
      "#CBCCD2",
      "#B2B3BA",
      "#92949C",
      "#6A6D77",
      "#555760",
      "#414349",
      "#292B2F",
      "#202225",
    ],
  },
  primaryColor: "brand",
  fontSizes: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.1rem",
    xl: "1.2rem",
  },
  headings: {
    // properties for all headings
    fontWeight: "400",
    fontFamily: "Inter, sans-serif",

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: "2rem" },
      h2: { fontSize: "1.6rem" },
      h3: { fontSize: "1.4rem" },
      h4: { fontSize: "1.2rem" },
      h5: { fontSize: "1rem" },
      h6: { fontSize: "0.9rem" },
    },
  },
};
