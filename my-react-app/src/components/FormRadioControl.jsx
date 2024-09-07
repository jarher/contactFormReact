/* eslint-disable react/prop-types */
import { FormLabel, RadioGroup, HStack } from "@chakra-ui/react";
import { FromControlWrapper } from "./FromControlWrapper.jsx";
// import iconRadio from "../assets/icon-radio-selected.svg";

export const FormRadioControl = ({
  formLabelText,
  formControlProps,
  children,
  nameValue,
  errorMessage,
  formik,
  type,
}) => {
  return (
    <FromControlWrapper props={{ formControlProps, errorMessage, type }}>
      <FormLabel
        as="legend"
        color="brand.greyDark"
        fontSize={["auto", "0.725rem"]}
        fontWeight="400"
      >
        {formLabelText}{" "}
        <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
          *
        </span>
      </FormLabel>
      <RadioGroup
        display="flex"
        flexFlow="row wrap"
        justifyContent="space-between"
      >
        {children.map((element) => {
          const radioProps = {
            ...element,
            nameValue,
            formik,
          };
          return <RadioComponent {...radioProps} key={element.value} />;
        })}
      </RadioGroup>
    </FromControlWrapper>
  );
};

const RadioComponent = ({
  formRadioText,
  nameValue,
  value,
  formik,
  radioState,
  mt,
}) => {
  const { state, radioHandler } = radioState;
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
        name={nameValue}
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
