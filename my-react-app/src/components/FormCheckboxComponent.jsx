/* eslint-disable react/prop-types */
import { HStack, Text } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper";

FromControlWrapper;
export const FormCheckboxComponent = ({
  type,
  formControlProps,
  formLabelText,
  nameValue,
  errorMessage,
  formik,
}) => {
  const checkboxStyles = {
    cursor: "pointer",
    backgroundColor: "transparent",
    width: "1.3rem",
    height: "1.3rem",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "brand.greyMedium",
    borderRadius: "3px",
  };

  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <HStack alignItems="center" gap="0">
        <input
          id={nameValue}
          name={nameValue}
          type={type}
          style={checkboxStyles}
          {...formik.getFieldProps(nameValue)}
        />
        <label htmlFor="consent" style={{ marginLeft: "1rem" }}>
          {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
        </label>
      </HStack>

      <Text color="brand.red" mt="0.325rem">
        {errorMessage}
      </Text>
    </FromControlWrapper>
  );
};
