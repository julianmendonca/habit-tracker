import { useColorModeValue } from "@chakra-ui/react";

export const useWhite = () => useColorModeValue("white", "black");
export const useBlack = () => useColorModeValue("black", "white");
export const useGray = () => useColorModeValue("gray.200", "gray.700");
