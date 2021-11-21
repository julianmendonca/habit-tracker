import { ChakraProvider, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Box } from "@chakra-ui/layout";
import theme from "../theme";
import React from "react";
import ColorModeButton from "../components/buttons/ColorModeButton";

const MyAppContent = ({ Component, pageProps }: AppProps) => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === "light" ? "gray.300" : "gray.800";

  return (
    <Box>
      <Box
        position="fixed"
        width="100%"
        height="100%"
        backgroundColor={backgroundColor}
        left={0}
        top={0}
        zIndex="-10"
      ></Box>
      <Box
        width="100%"
        backgroundColor={backgroundColor}
        position="fixed"
        top={0}
        left={0}
        pb={5}
        pt={5}
        zIndex={2}
      >
        <Flex
          width="90%"
          alignItems="center"
          justifyContent="space-between"
          maxWidth={500}
          margin="0 auto"
        >
          <Heading mr="10" alignItems="center">
            Habits Tracker
          </Heading>
          <ColorModeButton />
        </Flex>
      </Box>
      <Box height="150px"></Box>
      <Component {...pageProps} />
    </Box>
  );
};

function MyApp(props: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyAppContent {...props} />
    </ChakraProvider>
  );
}
export default MyApp;
