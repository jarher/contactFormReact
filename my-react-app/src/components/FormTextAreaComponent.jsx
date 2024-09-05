/* eslint-disable react/prop-types */
import {
  FormControl,
  Text,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

export const FormTextAreaComponent = ({
  formControlProps,
  formLabelText,
  handleChangeFunction,
  getFieldProps,
  nameValue,
  errorMessage,
}) => {
  return (
    <FormControl {...formControlProps}>
      <Text mb="8px">
        {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
      </Text>
      <Textarea
        onChange={handleChangeFunction}
        size="sm"
        id={nameValue}
        name={nameValue}
        borderColor="brand.greyMedium"
        focusBorderColor="brand.greenMedium"
        {...getFieldProps}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
