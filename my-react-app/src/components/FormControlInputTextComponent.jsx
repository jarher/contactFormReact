/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const FormControlInputTextComponent = ({
  type,
  formControlProps,
  formLabelText,
  handleChangeFunction,
  getFieldProps,
  nameValue,
  errorMessage,
}) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel htmlFor="firstName" color="brand.greyDark">
        {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
      </FormLabel>
      <Input
        type={type}
        name={nameValue}
        id={nameValue}
        borderColor="brand.greyMedium"
        focusBorderColor="brand.greenMedium"
        onChange={handleChangeFunction}
        size="md"
        {...getFieldProps}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
