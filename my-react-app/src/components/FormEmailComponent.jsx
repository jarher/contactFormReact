/* eslint-disable react/prop-types */

import { FormWrapper } from "./FormWrapper";

export const FormEmailComponent = (props) => {
  const { inputStyles, formik } = props;
  const emailProps = {
    formControlProps: {
      mt: ["1.7rem", "0"],
      isInvalid: formik.errors.email && formik.touched.email,
    },
    formLabelProps: {
      htmlFor: "email",
      color: "brand.greyDark",
      fontSize: ["auto", "0.7rem"],
      fontWeight: "400",
      mb: "0.2rem",
      formLabelText: "Email Address",
    },
    formInputProps: {
      type: "email",
      name: "email",
      id: "email",
      ...inputStyles,
    },
    formErrorProps: {
      errorMessage: formik.errors.email,
    },
  };
  return <FormWrapper formik={formik} {...emailProps} />;
};
