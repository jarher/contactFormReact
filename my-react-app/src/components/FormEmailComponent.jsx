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
  return <FormWrapper {...emailProps} />;
};
