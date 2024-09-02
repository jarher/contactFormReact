import { ChakraProvider } from "@chakra-ui/react";
import { Form } from "./components/Form.jsx";

function App() {
  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  );
}

export default App;
