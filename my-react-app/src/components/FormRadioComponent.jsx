/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormErrorMessage,
  Radio,
  Box,
  Stack,
} from "@chakra-ui/react";
import radioSelectedIcon from "../assets/icon-radio-selected.svg";
import { useContext } from "react";
import { FormContext } from "./Form";
import { AsteriskComponent } from "./AsteriskComponent";

export const FormRadioComponent = () => {
  const { formik } = useContext(FormContext);
  return (
    <FormControl
      as="fieldset"
      isInvalid={formik.errors.queryType && formik.touched.queryType}
      mt={["1rem", "1rem", "0"]}
    >
      <FormLabel
        as="legend"
        color="brand.greyDark"
        fontSize={["auto", "0.725rem"]}
        fontWeight="400"
      >
        Query Type
        <AsteriskComponent />
      </FormLabel>
      <RadioGroupWrapper formik={formik} />
      <FormErrorMessage>{formik.errors.queryType}</FormErrorMessage>
    </FormControl>
  );
};

const RadioGroupWrapper = ({ formik }) => {
  const { radioValue, state, radioGeneralEnquityRef, radioSupportRequestRef } =
    useContext(FormContext);

  const changeStyles = (state) => {
    let background = state ? "hsl(148, 38%, 91%)" : "transparent";
    let borderColor = state ? "hsl(169, 82%, 27%)" : "hsl(186, 15%, 59%)";
    let borderWidth = state ? "2px" : "1px";
    return {
      background,
      borderColor,
      borderWidth,
    };
  };

  const radioOptions = [
    {
      value: "generalEnquity",
      labelText: "General Enquity",
      radioHandler: () => {
        radioValue({ type: "generalEnquity" });
      },
      newStyles: changeStyles(state.generalEnquityState),
      state: state.generalEnquityState,
      elementRef: radioGeneralEnquityRef,
    },
    {
      value: "supportRequest",
      labelText: "Support Request",
      radioHandler: () => {
        radioValue({ type: "supportRequest" });
      },
      newStyles: changeStyles(state.supportRequest),
      state: state.supportRequest,
      elementRef: radioSupportRequestRef,
    },
  ];

  return (
    <RadioGroup name="queryType">
      <Stack direction="row" justifyContent="space-between" flex-wrap="wrap">
        {radioOptions.map((element) => {
          const props = {
            ...element,
            formik,
          };
          return <RadioBox {...props} key={element.value} />;
        })}
      </Stack>
    </RadioGroup>
  );
};

const RadioBox = ({
  formik,
  value,
  labelText,
  radioHandler,
  newStyles,
  state,
  elementRef,
}) => {
  return (
    <>
      <Box
        width={["100%", "48.5%"]}
        style={{
          ...newStyles,
          borderStyle: "solid",
          padding: "0.625rem",
          borderRadius: "0.3rem",
        }}
        onClick={radioHandler}
        _hover={{
          borderColor: "brand.greenMedium!important",
          borderWidth: "2px!important",
          cursor: "pointer",
        }}
        ref={elementRef}
      >
        <Radio
          value={value}
          id={value}
          _checked={{
            backgroundImage: radioSelectedIcon,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            border: "none",
          }}
          onChange={formik.handleChange}
          isChecked={state}
        >
          {labelText}
        </Radio>
      </Box>
    </>
  );
};
