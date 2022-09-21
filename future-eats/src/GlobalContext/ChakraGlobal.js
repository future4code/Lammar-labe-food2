import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    semanticTokens: {
        colors: {
          error: 'red.500',
          text: {
            default: 'gray.900',
            _dark: 'gray.50',
          },
        },
      },
})