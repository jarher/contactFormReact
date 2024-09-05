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
        fontSize: "1.25rem",
      },
      form: {
        bg: "white",
        padding: "1.5625rem",
        mx: "1rem",
        my: "2rem",
        borderRadius: "1rem",
        maxWidth: ["auto", "auto", "740px"],
      },
    },
  },
});

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   let temp;
  //   if (isVisible) {
  //     temp = () =>
  //       setTimeout(() => {
  //         setIsVisible(false);
  //       }, 1000);
  //     return clearTimeout(temp);
  //   }
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <VStack position="relative" gap="0rem">
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
      width={["90%", "auto", "50%"]}
      flexFlow="row wrap"
      bg="brand.greyDark"
      borderRadius="0.625rem"
      padding="1.5rem"
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
        fontSize="0.85rem"
        mt="0.625rem"
      >
        Thanks for completing the form. We'll be in touch soon!
      </AlertDescription>
    </Alert>
  );
};

export default App;
