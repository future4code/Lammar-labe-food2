import Rotas from "./routes/routes";
import StyledGlobal from "./StyledGlobal";
import { FutureEatsProvider } from "./GlobalContext/FutureEatsProvider";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./styles"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <FutureEatsProvider>
        <Rotas />
        <StyledGlobal />
      </FutureEatsProvider>
    </ChakraProvider>
  );
}

export default App;
