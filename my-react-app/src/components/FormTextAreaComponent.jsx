/* eslint-disable react/prop-types */
import { Textarea } from "@chakra-ui/react";
import { UseFormContext } from "./Form";
import { UseAppContext } from "../App";

export const FormTextAreaComponent = () => {
  const { AsteriskComponent, FormControl, FormLabel, FormErrorMessage } =
    UseAppContext();
  const { formik, inputStyles } = UseFormContext();

  return (
    <FormControl
      isInvalid={formik.errors.message && formik.touched.message}
      mt={["1rem", "1rem", "0"]}
    >
      <FormLabel
        mb="8px"
        fontSize={["auto", "0.8rem"]}
        fontWeight="700"
        htmlFor="message"
      >
        Message
        <AsteriskComponent />
      </FormLabel>
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
