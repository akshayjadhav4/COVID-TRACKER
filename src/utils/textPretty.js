import numeral from "numeral";

export const textPretty = (value) =>
  value ? `+${numeral(value).format("0.0a")}` : "+0";
