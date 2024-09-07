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
    width: "1rem",
    height: "1rem",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "hsl(186, 15%, 59%)",
    borderRadius: "3px",
  };

  return (
    <FromControlWrapper props={{ errorMessage, type }}>
      <HStack alignItems="center" gap="0" {...formControlProps}>
        <input
          id={nameValue}
          name={nameValue}
          type={type}
          style={checkboxStyles}
          {...formik.getFieldProps(nameValue)}
        />
        <label
          htmlFor="consent"
          style={{
            marginLeft: "1rem",
            cursor: "Pointer",
            fontWeight: "400",
            fontSize: "0.725rem",
          }}
        >
          {formLabelText}{" "}
          <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
            *
          </span>
        </label>
      </HStack>

      <Text color="brand.red" mt="0.325rem" fontSize="0.7rem">
        {errorMessage}
      </Text>
    </FromControlWrapper>
  );
};
