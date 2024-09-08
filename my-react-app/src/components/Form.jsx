/* eslint-disable react/prop-types */
import { Button, HStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInputTextComponent } from "./FormInputTextComponent";
import { FormEmailComponent } from "./FormEmailComponent";
import { FormRadioComponent } from "./FormRadioComponent";
import { FormTextAreaComponent } from "./FormTextAreaComponent";
import { FormCheckboxComponent } from "./FormCheckboxComponent";

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("This field is required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  queryType: Yup.string().required("Please select a query type"),
  message: Yup.string()
    .min(3, "Message too short")
    .required("This field is required"),
  consent: Yup.bool()
    .required()
    .oneOf([true], "To submit this form, please consent to begin contacted"),
});

export const Form = ({ open }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
    validationSchema: formSchema,
    onSubmit: () => {
      open(true);
    },
  });

  const inputStyles = {
    borderColor: "brand.greyMedium",
    _hover: { borderColor: "brand.greenMedium", borderWidth: "2px" },
    focusBorderColor: "brand.greenMedium",
    cursor: "pointer",
  };

  const buttonProps = {
    mt: "1.175rem",
    type: "submit",
    variant: "solid",
    width: "100%",
    bg: "brand.greenMedium",
    _hover: { bg: "brand.greyDark" },
    color: "brand.greenLighter",
    fontSize: "0.875rem",
    fontWeight: "400",
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <h1>Contact Us</h1>
        <HStack mt={["1.5rem", "auto", "1rem"]} flexFlow="row wrap">
          <FormInputTextComponent inputStyles={inputStyles} formik={formik} />
          <FormEmailComponent inputStyles={inputStyles} formik={formik} />
          <FormRadioComponent formik={formik} />
          <FormTextAreaComponent inputStyles={inputStyles} formik={formik} />
          <FormCheckboxComponent formik={formik} />

          <Button {...buttonProps}>Submit</Button>
        </HStack>
      </form>
    </>
  );
};
