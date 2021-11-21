import { Box, BoxProps } from "@chakra-ui/layout";
import { useGray } from "../../src/utils/colors";
import { makeStyles, propsToClassKey } from "@mui/styles";

type UseStylesProps = {
  clickable: boolean;
};

const useStyles = makeStyles(() => ({
  emptyCard: {
    cursor: ({ clickable }: UseStylesProps) =>
      clickable ? "pointer" : "inherit",
  },
}));

const EmptyCard = (props: BoxProps) => {
  const backgroundColor = useGray();
  const styles = useStyles({ clickable: props.onClick !== undefined });
  return (
    <Box
      backgroundColor={backgroundColor}
      p={2}
      {...props}
      className={styles.emptyCard}
    >
      {props.children}
    </Box>
  );
};

export default EmptyCard;
