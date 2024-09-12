/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FormWrapper } from "./FormWrapper";
import { FormContext } from "./Form";

export const FormEmailComponent = () => {
  const { inputStyles, formik } = useContext(FormContext);
  const emailProps = {
    formControlProps: {
      isInvalid: formik.errors.email && formik.touched.email,
    },
    formLabelProps: {
      htmlFor: "email",
      color: "brand.greyDark",
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
  return <FormWrapper {...emailProps} />;
};
