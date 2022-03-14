import { makeStyles } from "@fluentui/react-components";
import { flexItem } from "../../../components";

export const useStyles = makeStyles({
  medium: {
      ...flexItem.size.medium
  },
  pushColumn: {
    ...flexItem.pushColumn
  },
  grow: {
    ...flexItem.grow
  }
});
