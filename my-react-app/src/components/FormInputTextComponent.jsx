/* eslint-disable react/prop-types */
import { HStack } from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";

export const FormInputTextComponent = (props) => {
  const { inputStyles, formik } = props;
  const inputTextElements = [
    {
      id: "i1",
      formControlProps: {
        width: ["100%", "48.5%"],
        isInvalid: formik.errors.firstName && formik.touched.firstName,
        mt: "0",
      },
      formLabelProps: {
        htmlFor: "firstName",
        color: "brand.greyDark",
        fontSize: ["auto", "0.7rem"],
        fontWeight: "400",
        mb: "0.2rem",
        formLabelText: "First Name",
      },
      formInputProps: {
        type: "text",
        name: "firstName",
        id: "firstName",
        ...inputStyles,
      },
      formErrorProps: {
        display: ["block", "block", "none"],
        errorMessage: formik.errors.firstName,
      },
    },
    {
      id: "i2",
      formControlProps: {
        width: ["100%", "48.5%"],
        isInvalid: formik.errors.lastName && formik.touched.lastName,
      },
      formLabelProps: {
        htmlFor: "lastName",
        color: "brand.greyDark",
        fontSize: ["auto", "0.7rem"],
        fontWeight: "400",
        mb: "0.2rem",
        formLabelText: "Last Name",
      },
      formInputProps: {
        type: "text",
        name: "lastName",
        id: "lastName",
        ...inputStyles,
      },
      formErrorProps: {
        display: ["block", "block", "none"],
        errorMessage: formik.errors.lastName,
      },
    },
  ];
  return (
    <HStack
      justifyContent="space-between"
      flexFlow="row wrap"
      width="100%"
      gap="0"
    >
      {inputTextElements.map((element) => (
        <FormWrapper formik={formik} {...element} key={element.id} />
      ))}
      <HStack
        display={["none", "none", "flex"]}
        justifyContent="space-between"
        width="100%"
      >
        <div style={{ width: "48.5%", color: "hsl(0, 66%, 54%)" }}>
          {formik.errors.firstName && formik.errors.firstName}
        </div>

        <div style={{ width: "48.5%", color: "hsl(0, 66%, 54%)" }}>
          {formik.errors.lastName && formik.errors.lastName}
        </div>
      </HStack>
    </HStack>
  );
};
