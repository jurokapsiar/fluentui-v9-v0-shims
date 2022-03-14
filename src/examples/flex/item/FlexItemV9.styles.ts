import { makeStyles, shorthands } from "@fluentui/react-components";
import { flexItem } from "../../../components";

export const useStyles = makeStyles({
  start: {
      ...flexItem.align.start
  },
  stretch: {
    ...flexItem.align.stretch
  },
  center: {
    ...flexItem.align.center
  },
  end: {
    ...flexItem.align.end
  },
  small: {
      ...flexItem.size.small
  }
});
