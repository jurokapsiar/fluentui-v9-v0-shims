import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
  debug: {
    ...shorthands.border('1px', 'dotted', 'grey'),
    backgroundColor: 'lightgrey',
  }
});
