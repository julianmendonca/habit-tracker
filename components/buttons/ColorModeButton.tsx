import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const ColorModeButton = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} {...props}>
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ColorModeButton;
