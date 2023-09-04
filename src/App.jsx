import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import { Form } from "./Components/Form";

const theme = extendTheme({
  components: {
    Select: {
      variants: {
        filled: {
          option: {
            fontSize: "24px",
            color: "red",
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        label: {
          fontSize: "44px",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Form />
      </ChakraProvider>
    </>
  );
}

export default App;
