/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

export const FromControlWrapper = ({ props, children }) => {
  const { errorMessage, formControlProps, type } = props;
  const marginTop = type !== "text" &&
    type !== "checkbox" && ["0", "0", "1rem"];
  return (
    <FormControl {...formControlProps} position="relative" mt={marginTop}>
      {children}
      <FormErrorMessage position="absolute" bottom="-1.2rem" fontSize="0.7rem">
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
