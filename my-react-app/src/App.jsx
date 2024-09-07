/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {
  ChakraProvider,
  extendTheme,
  Alert,
  AlertTitle,
  AlertDescription,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/karla";
import { Form } from "./components/Form.jsx";
import IconSuccess from "./assets/icon-success-check.svg";
import { useState } from "react";

const colors = {
  brand: {
    greenLighter: "hsl(148, 38%, 91%)",
    greenMedium: "hsl(169, 82%, 27%)",
    greyMedium: "hsl(186, 15%, 59%)",
    greyDark: "hsl(187, 24%, 22%)",
    red: "hsl(0, 66%, 54%)",
    white: "hsl(0, 0%, 100%)",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: `'Karla', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: colors.brand.greenLighter,
        fontSize: "1rem",
      },
      main: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      h1: {
        color: colors.brand.greyDark,
        fontSize: ["2rem", "auto", "1.45rem"],
        fontWeight: "bold",
      },
      form: {
        bg: "white",
        padding: "1.5625rem",
        mx: "1rem",
        my: "2rem",
        borderRadius: "0.5rem",
        maxWidth: ["auto", "auto", "520px"],
      },
      label: {
        fontSize: ["auto", "0.825rem"],
      },
    },
  },
});

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <VStack
        position="relative"
        justifyContent="center"
        height={["auto", "auto", "100vh"]}
        gap="0"
      >
        {isVisible && <AlertComponent />}
        <Form open={setIsVisible} />
      </VStack>
    </ChakraProvider>
  );
}

const AlertComponent = () => {
  return (
    <Alert
      status="success"
      width={["90%", "auto", "57%"]}
      flexFlow="row wrap"
      bg="brand.greyDark"
      borderRadius="0.625rem"
      padding="1.5rem 1.2rem"
      mt="1.5rem"
      mb="-2rem"
    >
      <img src={IconSuccess} alt="icon success" />
      <AlertTitle color="brand.white" marginLeft="0.625rem">
        Message Sent!
      </AlertTitle>
      <AlertDescription
        width="100%"
        color="brand.greenLighter"
        fontSize="0.68rem"
        mt="0.625rem"
      >
        Thanks for completing the form. We'll be in touch soon!
      </AlertDescription>
    </Alert>
  );
};

export default App;
