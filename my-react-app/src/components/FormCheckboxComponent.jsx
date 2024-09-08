/* eslint-disable react/prop-types */
import { FormControl, HStack, Text } from "@chakra-ui/react";

export const FormCheckboxComponent = ({ formik }) => {
  const checkboxStyles = {
    cursor: "pointer",
    backgroundColor: "transparent",
    width: "1rem",
    height: "1rem",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "hsl(186, 15%, 59%)",
    borderRadius: "3px",
  };

  return (
    <FormControl
      mt="1.575rem"
      isInvalid={formik.errors.consent && formik.touched.consent}
    >
      <HStack alignItems="center" gap="0" mt="1.575rem">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          style={checkboxStyles}
          {...formik.getFieldProps("consent")}
        />
        <label
          htmlFor="consent"
          style={{
            marginLeft: "1rem",
            cursor: "Pointer",
            fontWeight: "400",
            fontSize: "0.725rem",
          }}
        >
          I consent to begin contacted by the team{" "}
          <span style={{ color: "brand.greenMedium", paddingLeft: "0.3rem" }}>
            *
          </span>
        </label>
      </HStack>

      <Text color="brand.red" mt="0.325rem" fontSize="0.7rem">
        {formik.errors.consent}
      </Text>
    </FormControl>
  );
};
