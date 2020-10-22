import { ChakraProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/theme";

function App({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
