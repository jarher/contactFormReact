/* eslint-disable react/prop-types */
import { FormLabel, Input } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper";
// import { withStyles } from "./withStyles.jsx";

export const FormControlInputTextComponent = ({
  type,
  formControlProps,
  formLabelText,
  nameValue,
  errorMessage,
  formik,
}) => {
  // const InputComponent = () => (
  //   <Input
  //     type={type}
  //     name={nameValue}
  //     id={nameValue}
  //     onChange={formik.handleChange}
  //     size="md"
  //     {...formik.getFieldProps(nameValue)}
  //   />
  // );

  // const StyledInput = withStyles(InputComponent);

  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <FormLabel htmlFor="firstName" color="brand.greyDark">
        {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
      </FormLabel>
      {/* <StyledInput /> */}
      <Input
        type={type}
        name={nameValue}
        id={nameValue}
        borderColor="brand.greyMedium"
        _hover={{ borderColor: "brand.greenMedium", borderWidth: "2px" }}
        focusBorderColor="brand.greenMedium"
        onChange={formik.handleChange}
        size="md"
        cursor="pointer"
        {...formik.getFieldProps(nameValue)}
      />
    </FromControlWrapper>
  );
};
