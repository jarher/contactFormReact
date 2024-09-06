/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

export const FromControlWrapper = ({ props, children }) => {
  const { errorMessage, formControlProps, type } = props;
  const marginTop = type !== "checkbox" && ["0", "0", "1.5rem"];
  return (
    <FormControl {...formControlProps} position="relative" mb={marginTop}>
      {children}
      <FormErrorMessage position="absolute" bottom="-1.5rem">
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
