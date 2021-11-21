import { Box, BoxProps } from "@chakra-ui/layout";

const CenteredBox = (props: BoxProps) => {
  return (
    <Box width="90%" maxWidth={500} margin="0 auto" {...props}>
      {props.children}
    </Box>
  );
};

export default CenteredBox;
