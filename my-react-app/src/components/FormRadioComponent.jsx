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
import { useContext, useReducer } from "react";
import { AsteriskComponent, FormContext } from "./Form";

export const FormRadioComponent = () => {
  const { formik } = useContext(FormContext);
  return (
    <FormControl
      as="fieldset"
      isInvalid={formik.errors.queryType && formik.touched.queryType}
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

function reducer(_, action) {
  if (action.type === "generalEnquity") {
    return {
      generalEnquityState: true,
      supportRequest: false,
    };
  }
  return {
    generalEnquityState: false,
    supportRequest: true,
  };
}

const RadioGroupWrapper = ({ formik }) => {
  const [state, dispatch] = useReducer(reducer, {
    generalEnquityState: false,
    supportRequest: false,
  });

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
        dispatch({ type: "generalEnquity" });
      },
      newStyles: changeStyles(state.generalEnquityState),
    },
    {
      value: "supportRequest",
      labelText: "Support Request",
      radioHandler: () => {
        dispatch({ type: "supportRequest" });
      },
      newStyles: changeStyles(state.supportRequest),
    },
  ];

  return (
    <RadioGroup name="queryType">
      <Stack direction="row" justifyContent="space-between">
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

const RadioBox = ({ formik, value, labelText, radioHandler, newStyles }) => {
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
            outline: "1px solid red",
          }}
          onChange={formik.handleChange}
        >
          {labelText}
        </Radio>
      </Box>
    </>
  );
};
