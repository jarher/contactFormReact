/* eslint-disable react/prop-types */
import { Text, Textarea } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper";

export const FormTextAreaComponent = ({
  formControlProps,
  formLabelText,
  nameValue,
  errorMessage,
  formik,
  type,
}) => {
  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <Text mb="8px">
        {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
      </Text>
      <Textarea
        onChange={formik.handleChange}
        size="sm"
        id={nameValue}
        name={nameValue}
        borderColor="brand.greyMedium"
        focusBorderColor="brand.greenMedium"
        _hover={{ borderColor: "brand.greenMedium", borderWidth: "2px" }}
        cursor="pointer"
        borderRadius="0.3125rem"
        {...formik.getFieldProps(nameValue)}
      />
    </FromControlWrapper>
  );
};
