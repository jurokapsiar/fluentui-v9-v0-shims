import { makeStyles, shorthands } from "@fluentui/react-components";

const gapValues = {
  smaller: "8px",
  small: "10px",
  medium: "15px",
  large: "30px",
};

const paddingValues = {
  medium: "10px",
};

export const useFlexStyles = makeStyles({
  flex: {
    display: "flex",
  },
  debug: {
    ...shorthands.border("1px", "dotted", "gray"),
    backgroundColor: "lightgrey",
  },
  inline: {
    display: "inline-flex",
  },
  column: {
    flexDirection: "column",
  },
  alignItemsFlexStart: {
    alignItems: "flex-start",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end",
  },
  alignItemsStretch: {
    alignItems: "stretch",
  },
  justifyContentFlexStart: {
    justifyContent: "flex-start",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentFlexEnd: {
    justifyContent: "flex-end",
  },
  justifyContentStretch: {
    justifyContent: "stretch",
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  wrap: {
    flexWrap: "wrap",
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  gapColumnSmall: {
    columnGap: gapValues["small"],
  },
  gapColumnSmaller: {
    columnGap: gapValues["smaller"],
  },
  gapColumnMedium: {
    columnGap: gapValues["medium"],
  },
  gapColumnLarge: {
    columnGap: gapValues["large"],
  },
  gapSmall: {
    rowGap: gapValues["small"],
  },
  gapSmaller: {
    rowGap: gapValues["smaller"],
  },
  gapMedium: {
    rowGap: gapValues["medium"],
  },
  gapLarge: {
    rowGap: gapValues["large"],
  },
  paddingMedium: {
    ...shorthands.padding(paddingValues["medium"]),
  },
});
