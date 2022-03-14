import { GriffelStyle } from "@griffel/core";

type Size = {
  half: GriffelStyle;
  quarter: GriffelStyle;
  small: GriffelStyle;
  medium: GriffelStyle;
  large: GriffelStyle;
  (flexBasis: string): GriffelStyle;
};

const align = {
  auto: { alignSelf: "auto" },
  start: { alignSelf: "flex-start" },
  end: { alignSelf: "flex-end" },
  center: { alignSelf: "center" },
  baseline: { alignSelf: "baseline" },
  stretch: { alignSelf: "stretch" }
};

const size = ((flexBasis: string) => ({ flexBasis })) as Size;
size.half = { flexBasis: "50%" };
size.quarter = { flexBasis: "25%" };
size.small = { flexBasis: "150px" };
size.medium = { flexBasis: "200px" };
size.large = { flexBasis: "300px" };

const grow = (flexGrow: boolean | number) => {
  if (flexGrow === true) {
    return { flexGrow: 1 };
  } else if (flexGrow) {
    return { flexGrow };
  }
};
grow.flexGrow = 1;

const shrink = (flexShrink: boolean | number) => {
  if (typeof flexShrink === "number") {
    return { flexShrink };
  } else if (flexShrink === false) {
    return { flexShrink: 0 };
  }
};

const pushRow = { marginLeft: "auto" };
const pushColumn = { marginTop: "auto" };

export const flexItem = {
  align,
  size,
  grow,
  shrink,
  pushRow,
  pushColumn
};
