/* eslint-disable react/prop-types */
import { FormLabel, Input } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper";

export const FormControlInputTextComponent = ({
  type,
  formControlProps,
  inputStyles,
  formLabelText,
  nameValue,
  errorMessage,
  formik,
}) => {
  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <FormLabel
        htmlFor="firstName"
        color="brand.greyDark"
        fontSize={["auto", "0.7rem"]}
        fontWeight="400"
        mb="0.2rem"
      >
        {formLabelText}{" "}
        <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
          *
        </span>
      </FormLabel>
      <Input
        type={type}
        name={nameValue}
        id={nameValue}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="md"
        {...inputStyles}
        {...formik.getFieldProps(nameValue)}
      />
    </FromControlWrapper>
  );
};
