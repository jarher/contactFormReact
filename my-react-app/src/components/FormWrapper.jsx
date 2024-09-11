/* eslint-disable react/prop-types */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { AsteriskComponent, FormContext } from "./Form";
import { useContext } from "react";

export const FormWrapper = ({
  formControlProps,
  formLabelProps,
  formInputProps,
  formErrorProps,
}) => {
  const { formik } = useContext(FormContext);
  const { formLabelText, ...labelRest } = formLabelProps;
  const { errorMessage, ...errorRest } = formErrorProps;
  const { name } = formInputProps;
  return (
    <FormControl {...formControlProps}>
      <FormLabel {...labelRest}>
        {formLabelText}
        <AsteriskComponent />
      </FormLabel>
      <Input
        size="md"
        {...formInputProps}
        {...formik.getFieldProps({ name })}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <FormErrorMessage {...errorRest} size="0.8rem">
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
