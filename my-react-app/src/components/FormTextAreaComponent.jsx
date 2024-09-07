/* eslint-disable react/prop-types */
import { Text, Textarea } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper";

export const FormTextAreaComponent = ({
  formControlProps,
  formLabelText,
  nameValue,
  errorMessage,
  inputStyles,
  formik,
  type,
}) => {
  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <Text mb="8px" fontSize={["auto", "0.725rem"]} fontWeight="400">
        {formLabelText}
        <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
          *
        </span>
      </Text>
      <Textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="sm"
        id={nameValue}
        name={nameValue}
        borderRadius="0.3125rem"
        {...inputStyles}
        {...formik.getFieldProps(nameValue)}
        height={["23.125rem", "auto", "4.6875rem"]}
      />
    </FromControlWrapper>
  );
};
