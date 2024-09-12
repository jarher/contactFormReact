/* eslint-disable react/no-unescaped-entities */
import { Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";
import IconSuccess from "../assets/icon-success-check.svg";

export const AlertComponent = () => {
  return (
    <Alert
      status="success"
      flexFlow="row wrap"
      alignItems="center"
      bg="brand.greyDark"
      borderRadius="0.625rem"
      margin="auto"
    >
      <img
        src={IconSuccess}
        alt="icon success"
        style={{ width: "1.1rem", height: "1.1rem" }}
      />
      <AlertTitle color="brand.white" marginLeft="0.625rem" fontSize="0.8rem">
        Message Sent!
      </AlertTitle>
      <AlertDescription
        width="100%"
        color="brand.greenLighter"
        fontSize="0.7rem"
      >
        Thanks for completing the form. We'll be in touch soon!
      </AlertDescription>
    </Alert>
  );
};
