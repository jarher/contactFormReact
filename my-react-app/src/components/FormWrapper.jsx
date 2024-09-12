/* eslint-disable react/prop-types */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormContext } from "./Form";
import { useContext } from "react";
import { AsteriskComponent } from "./AsteriskComponent";

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
    <FormControl {...formControlProps} mt={["1rem", "1rem", "0"]}>
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
