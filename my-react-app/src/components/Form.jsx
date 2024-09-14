/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useRef, useReducer, useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { FormInputTextComponent } from "./FormInputTextComponent";
import { FormEmailComponent } from "./FormEmailComponent";
import { FormTextAreaComponent } from "./FormTextAreaComponent";
import { FormCheckboxComponent } from "./FormCheckboxComponent";
import { FormRadioComponent } from "./FormRadioComponent";
import { ToastContainer, toast } from "react-toastify";
import { AlertComponent } from "./AlertComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { UseAppContext } from "../App";

export const FormContext = createContext(null);

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

function reducer(_, action) {
  if (action.type === "generalEnquity") {
    return {
      generalEnquityState: true,
      supportRequest: false,
    };
  }
  if (action.type === "supportRequest") {
    return {
      generalEnquityState: false,
      supportRequest: true,
    };
  }
  return {
    generalEnquityState: false,
    supportRequest: false,
  };
}

export const Form = () => {
  const radioGeneralEnquityRef = useRef(null);
  const radioSupportRequestRef = useRef(null);
  const consentCheckboxRef = useRef(null);
  const [loadingState, setLoadingState] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    generalEnquityState: false,
    supportRequest: false,
  });
  const { HStack } = UseAppContext();

  const inputStyles = {
    borderColor: "brand.greyMedium",
    _hover: { borderColor: "brand.greenMedium", borderWidth: "2px" },
    focusBorderColor: "brand.greenMedium",
    cursor: "pointer",
  };

  const toastProps = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
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
      setLoadingState(true);
      setTimeout(() => {
        setLoadingState(false);
        toast(<AlertComponent />, toastProps);
        dispatch({ type: null });
        [radioGeneralEnquityRef, radioSupportRequestRef].forEach((element) =>
          element.current
            .querySelector(".chakra-radio__control")
            .removeAttribute("data-checked")
        );
        consentCheckboxRef.current.checked = false;
        formik.resetForm();
        window.scroll(0, 0);
      }, 2000);
    },
  });

  return (
    <>
      <ToastContainer className="notification" />
      <FormContext.Provider
        value={{
          radioValue: (value) => dispatch(value),
          consentCheckboxRef,
          radioGeneralEnquityRef,
          radioSupportRequestRef,
          formik,
          inputStyles,
          state,
        }}
      >
        <form onSubmit={formik.handleSubmit} noValidate>
          <h1>Contact Us</h1>
          <HStack
            mt={["1.5rem", "auto", "1rem"]}
            flexFlow="row wrap"
            min-height="75vh"
          >
            <FormInputTextComponent />
            <FormEmailComponent />
            <FormRadioComponent />
            <FormTextAreaComponent />
            <FormCheckboxComponent />

            <Button {...buttonProps} isLoading={loadingState}>
              Submit
            </Button>
          </HStack>
        </form>
      </FormContext.Provider>
    </>
  );
};

export const UseFormContext = () => useContext(FormContext);
