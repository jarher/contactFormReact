/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";
import { UseFormContext } from "./Form";

export const FormEmailComponent = () => {
  const { inputStyles, formik } = UseFormContext();
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
