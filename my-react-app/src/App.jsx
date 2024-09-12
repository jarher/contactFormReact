/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react";
import "@fontsource/karla";
import { Form } from "./components/Form.jsx";

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
        mx: ["1rem", "0"],
        my: ["2rem", "0"],
        borderRadius: "0.5rem",
        maxWidth: ["auto", "auto", "550px"],
      },
      label: {
        fontSize: ["auto", "0.825rem"],
      },
    },
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <VStack
          position="relative"
          justifyContent="center"
          alignItems="center"
          minHeight={["auto", "auto", "100vh"]}
          gap="0"
        >
          <Form />
        </VStack>
      </ChakraProvider>
    </>
  );
}

export default App;
