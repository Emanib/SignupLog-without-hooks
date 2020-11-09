import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/,
      "password must be 8 char"
    )
    .required(),
});

export const fieldSchema = (fieldName) => {
  switch (fieldName) {
    case "email":
      return yup.string().email().required();
    case "password":
      return yup
        .string()
        .matches(
          /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/,
          "password must be 8 char"
        )
        .required();

    default:
      throw new Error("invalid fieldName");
  }
};