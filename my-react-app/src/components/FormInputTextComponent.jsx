/* eslint-disable react/prop-types */
import { HStack } from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";
import { FormContext } from "./Form";
import { useContext } from "react";

export const FormInputTextComponent = () => {
  const { formik, inputStyles } = useContext(FormContext);
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
        <FormWrapper {...element} key={element.id} />
      ))}
      {/* show first and last name error message for medium size */}
      <HStack
        display={["none", "none", "flex"]}
        justifyContent="space-between"
        width="100%"
      >
        <DisplayErrorMediumBreakpoint errorMessage={formik.errors.firstName} />
        <DisplayErrorMediumBreakpoint errorMessage={formik.errors.lastName} />
      </HStack>
    </HStack>
  );
};

const DisplayErrorMediumBreakpoint = ({ errorMessage }) => {
  return (
    <div
      style={{ width: "48.5%", color: "hsl(0, 66%, 54%)", fontSize: "0.8rem" }}
    >
      {errorMessage}
    </div>
  );
};
