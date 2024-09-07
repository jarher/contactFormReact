/* eslint-disable react/prop-types */
import { Button, HStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormControlInputTextComponent } from "./FormControlInputTextComponent.jsx";
import { FormRadioControl } from "./FormRadioControl.jsx";
import { FormTextAreaComponent } from "./FormTextAreaComponent.jsx";
import { FormCheckboxComponent } from "./FormCheckboxComponent.jsx";
import { useState } from "react";

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
  const [radioChange, setRadioChange] = useState({
    generalEnquityState: false,
    supportRequest: false,
  });

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

  const formElements = [
    {
      type: "text",
      formControlProps: {
        width: ["100%", "48.5%"],
        mt: "0",
        isInvalid: formik.errors.firstName && formik.touched.firstName,
      },
      inputStyles,
      formLabelText: "First Name",
      nameValue: "firstName",
      errorMessage: formik.errors.firstName,
    },
    {
      type: "text",
      formControlProps: {
        width: ["100%", "48.5%"],
        mt: ["1.7rem", "0"],
        isInvalid: formik.errors.lastName && formik.touched.lastName,
      },
      inputStyles,
      formLabelText: "Last Name",
      nameValue: "lastName",
      errorMessage: formik.errors.lastName,
    },
    {
      type: "email",
      formControlProps: {
        mt: ["1.7rem", "0"],
        isInvalid: formik.errors.email && formik.touched.email,
      },
      inputStyles,
      formLabelText: "Email Address",
      nameValue: "email",
      errorMessage: formik.errors.email,
    },
    {
      type: "radioGroup",
      formLabelText: "Query Type",
      formControlProps: {
        as: "fieldset",
        mt: "1.875rem",
        isInvalid: formik.errors.queryType && formik.touched.queryType,
      },
      children: [
        {
          formRadioText: "General Enquity",
          value: "generalEnquity",
          mt: "0",
          radioState: {
            state: radioChange.generalEnquityState,
            radioHandler: () =>
              setRadioChange({
                generalEnquityState: true,
                supportRequest: false,
              }),
          },
        },
        {
          formRadioText: "Support Request",
          value: "supportRequest",
          mt: ["1rem", "auto", "0"],
          radioState: {
            state: radioChange.supportRequest,
            radioHandler: () =>
              setRadioChange({
                generalEnquityState: false,
                supportRequest: true,
              }),
          },
        },
      ],
      nameValue: "queryType",
      errorMessage: formik.errors.queryType,
    },
    {
      type: "textArea",
      formControlProps: {
        mt: "1.875rem",
        isInvalid: formik.errors.message && formik.touched.message,
      },
      inputStyles,
      formLabelText: "Message",
      nameValue: "message",
      errorMessage: formik.errors.message,
    },
    {
      type: "checkbox",
      formControlProps: {
        mt: "1.575rem",
      },
      formLabelText: " I consent to begin contacted by the team",
      nameValue: "consent",
      errorMessage: formik.errors.consent,
    },
  ];

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
        <HStack
          mt={["1.5rem", "auto", "1rem"]}
          justifyContent="space-between"
          flexFlow="row wrap"
          gap="0"
        >
          {formElements.map((element, i) => {
            const elementProps = {
              ...element,
              formik,
            };
            if (element.type === "text" || element.type === "email") {
              return (
                <FormControlInputTextComponent {...elementProps} key={i} />
              );
            }
            if (element.type === "radioGroup") {
              return <FormRadioControl {...elementProps} key={i} />;
            }
            if (element.type === "textArea") {
              return <FormTextAreaComponent {...elementProps} key={i} />;
            }
            if (element.type === "checkbox") {
              return <FormCheckboxComponent {...elementProps} key={i} />;
            }
          })}

          <Button {...buttonProps}>Submit</Button>
        </HStack>
      </form>
    </>
  );
};
