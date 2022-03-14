import { makeStyles } from "@fluentui/react-components";
import { grid } from "../../../components";

export const useStyles = makeStyles({
  custom: {
      ...grid.rows("2fr repeat(2, 1fr)"),
      ...grid.columns("repeat(2, 2fr) 3fr 3fr 100px 14rem 50px 20%")
  },
});
