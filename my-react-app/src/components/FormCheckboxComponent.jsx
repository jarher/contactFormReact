/* eslint-disable react/prop-types */
import { FormControl, HStack, Text } from "@chakra-ui/react";

export const FormCheckboxComponent = ({
  type,
  formControlProps,
  formLabelText,
  getFieldProps,
  errorMessage,
}) => {
  return (
    <FormControl {...formControlProps}>
      <HStack alignItems="center" gap="0">
        <input id="consent" name="consent" type={type} {...getFieldProps} />
        <label htmlFor="consent" style={{ marginLeft: "1rem" }}>
          {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
        </label>
      </HStack>

      <Text color="brand.red" mt="0.325rem">
        {errorMessage}
      </Text>
    </FormControl>
  );
};
