/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";
import { FormContext } from "./Form";
import { useContext } from "react";
// import { AsteriskComponent } from "./AsteriskComponent";
import { UseAppContext } from "../App";

export const FormWrapper = ({
  formControlProps,
  formLabelProps,
  formInputProps,
  formErrorProps,
}) => {
  const { FormControl, FormLabel, AsteriskComponent, FormErrorMessage } =
    UseAppContext();
  const { formik } = useContext(FormContext);
  const { formLabelText, ...labelRest } = formLabelProps;
  const { errorMessage, ...errorRest } = formErrorProps;
  const { name } = formInputProps;
  return (
    <FormControl {...formControlProps} mt={["1rem", "1rem", "0"]}>
      <FormLabel {...labelRest} fontSize={["auto", "0.8rem"]} fontWeight="700">
        {formLabelText}
        <AsteriskComponent />
      </FormLabel>
      <Input
        size="lg"
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
