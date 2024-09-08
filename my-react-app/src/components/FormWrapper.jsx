/* eslint-disable react/prop-types */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const FormWrapper = ({
  formControlProps,
  formLabelProps,
  formInputProps,
  formErrorProps,
  formik,
}) => {
  const { formLabelText, ...labelRest } = formLabelProps;
  const { errorMessage, ...errorRest } = formErrorProps;
  const { name } = formInputProps;
  return (
    <FormControl {...formControlProps}>
      <FormLabel {...labelRest}>
        {formLabelText}
        <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
          *
        </span>
      </FormLabel>
      {
        <Input
          size="sm"
          {...formInputProps}
          {...formik.getFieldProps({ name })}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      }
      <FormErrorMessage {...errorRest}>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
