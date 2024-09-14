/* eslint-disable react/prop-types */
import { Text } from "@chakra-ui/react";
import { UseFormContext } from "./Form";
import { UseAppContext } from "../App";

export const FormCheckboxComponent = () => {
  const { AsteriskComponent, HStack, FormControl } = UseAppContext();
  const { formik, consentCheckboxRef } = UseFormContext();
  return (
    <FormControl isInvalid={formik.errors.consent && formik.touched.consent}>
      <HStack alignItems="center" gap="0" mt="1rem">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          style={{
            cursor: "pointer",
            backgroundColor: "transparent",
            width: "1rem",
            height: "1rem",
            appearance: "none",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "hsl(186, 15%, 59%)",
            borderRadius: "3px",
          }}
          {...formik.getFieldProps("consent")}
          ref={consentCheckboxRef}
        />
        <label
          htmlFor="consent"
          style={{
            marginLeft: "1rem",
            cursor: "Pointer",
            fontWeight: "400",
            fontSize: "0.8rem",
          }}
        >
          I consent to begin contacted by the team <AsteriskComponent />
        </label>
      </HStack>

      <Text color="brand.red" mt="0.325rem" fontSize="0.8rem">
        {formik.errors.consent}
      </Text>
    </FormControl>
  );
};
