import { makeStyles, shorthands } from "@fluentui/react-components";
import { flexItem } from "../../../components";

export const useStyles = makeStyles({
  medium: {
      ...flexItem.size("medium")
  },
  pushColumn: {
    ...flexItem.pushColumn()
  },
  grow: {
    ...flexItem.grow(true)
  },
  debug: {
    ...shorthands.border('1px', 'dotted', 'grey'),
    backgroundColor: 'lightgrey',
  }
});
