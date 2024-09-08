/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export const FormRadioComponent = ({ formik }) => {
  const [radioChange, setRadioChange] = useState({
    generalEnquityState: false,
    supportRequest: false,
  });

  const radioChildren = [
    {
      formRadioText: "General Enquity",
      value: "generalEnquity",
      formik,
      state: radioChange.generalEnquityState,
      radioHandler: () =>
        setRadioChange({ generalEnquityState: true, supportRequest: false }),
      mt: "0",
    },
    {
      formRadioText: "Support Request",
      value: "supportRequest",
      formik,
      state: radioChange.supportRequest,
      radioHandler: () =>
        setRadioChange({ generalEnquityState: false, supportRequest: true }),
      mt: ["1rem", "auto", "0"],
    },
  ];

  return (
    <FormControl
      as="fieldset"
      mt="1.875rem"
      isInvalid={formik.errors.queryType && formik.touched.queryType}
    >
      <FormLabel
        as="legend"
        color="brand.greyDark"
        fontSize={["auto", "0.725rem"]}
        fontWeight="400"
      >
        Query Type
        <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
          *
        </span>
      </FormLabel>
      <RadioGroup
        display="flex"
        flexFlow="row wrap"
        justifyContent="space-between"
      >
        {radioChildren.map((element) => {
          return <Radio {...element} key={element.value} />;
        })}
      </RadioGroup>
      <FormErrorMessage>{formik.errors.queryType}</FormErrorMessage>
    </FormControl>
  );
};

const Radio = ({ formRadioText, value, formik, state, radioHandler, mt }) => {
  const clickStyles = state
    ? {
        bg: "brand.greenLighter",
        borderColor: "brand.greenMedium!important",
        borderWidth: "2px",
      }
    : "";

  return (
    <HStack
      spacing="24px"
      py="0.5rem"
      px="1rem"
      borderColor="brand.greyMedium!important"
      _hover={{
        borderColor: "brand.greenMedium!important",
        borderWidth: "2px",
      }}
      cursor="pointer"
      border="1px solid"
      width={["100%", "49%"]}
      borderRadius="0.3125rem"
      {...clickStyles}
      mt={mt}
    >
      <input
        type="radio"
        value={value}
        id={value}
        name="queryType"
        onChange={formik.handleChange}
        onClick={radioHandler}
        style={{
          appearance: "none",
          width: "1.1rem",
          height: "1.1rem",
          border: "1px solid",
          borderColor: state ? "" : "hsl(186, 15%, 59%)",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <label htmlFor={value} style={{ width: "80%" }}>
        {formRadioText}
      </label>
    </HStack>
  );
};
