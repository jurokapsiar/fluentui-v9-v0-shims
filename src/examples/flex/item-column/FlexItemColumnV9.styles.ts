import { makeStyles } from "@fluentui/react-components";
import { flexItem } from "../../../components";

export const useStyles = makeStyles({
  half: {
      ...flexItem.size.half
  },
  quarter: {
    ...flexItem.size.quarter
  },
});
