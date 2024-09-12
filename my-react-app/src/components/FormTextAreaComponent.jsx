/* eslint-disable react/prop-types */
import {
  Text,
  Textarea,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "./Form";
import { AsteriskComponent } from "./AsteriskComponent";

export const FormTextAreaComponent = () => {
  const { formik, inputStyles } = useContext(FormContext);

  return (
    <FormControl
      isInvalid={formik.errors.message && formik.touched.message}
      mt={["1rem", "1rem", "0"]}
    >
      <Text mb="8px" fontSize={["auto", "0.725rem"]} fontWeight="400">
        Message
        <AsteriskComponent />
      </Text>
      <Textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="sm"
        id="message"
        name="message"
        borderRadius="0.3125rem"
        {...inputStyles}
        {...formik.getFieldProps("message")}
        height={["23.125rem", "auto", "4.6875rem"]}
      />
      <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
    </FormControl>
  );
};
