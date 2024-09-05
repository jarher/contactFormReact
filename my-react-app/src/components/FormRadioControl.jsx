/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  FormErrorMessage,
  Radio,
} from "@chakra-ui/react";

export const FormRadioControl = ({
  formLabelText,
  formControlProps,
  children,
  nameValue,
  handleChangeFunction,
  errorMessage,
}) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel as="legend" color="brand.greyDark">
        {formLabelText} <span style={{ color: "brand.greenMedium" }}>*</span>
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
            handleChangeFunction,
          };
          return <RadioComponent {...radioProps} key={element.value} />;
        })}
      </RadioGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

const RadioComponent = ({
  formRadioText,
  nameValue,
  value,
  handleChangeFunction,
}) => {
  return (
    <HStack
      spacing="24px"
      py="0.5rem"
      px="1rem"
      border="1px solid brand.greyMedium"
      width={["100%", "49%"]}
      borderRadius="0.3125rem"
    >
      <Radio
        colorScheme="green"
        size="lg"
        value={value}
        color="brand.greyDark"
        name={nameValue}
        onChange={handleChangeFunction}
      >
        {formRadioText}
      </Radio>
    </HStack>
  );
};
