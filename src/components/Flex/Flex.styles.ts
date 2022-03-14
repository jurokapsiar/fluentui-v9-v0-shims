import { makeStyles, shorthands } from "@fluentui/react-components";

export const gapValues = {
  smaller: "8px",
  small: "10px",
  medium: "15px",
  large: "30px"
};

export const paddingValues = {
  medium: "10px"
};

export const useFlexStyles = makeStyles({
  flex: {
    display: "flex"
  },
  debug: {
    ...shorthands.border("1px", "dotted", "gray"),
    backgroundColor: "lightgrey"
  },
  inline: {
    display: "inline-flex"
  },
  column: {
    flexDirection: "column"
  },
  alignItemsFlexStart: {
    alignItems: "flex-start"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end"
  },
  alignItemsStretch: {
    alignItems: "stretch"
  },
  justifyContentFlexStart: {
    justifyContent: "flex-start"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  justifyContentFlexEnd: {
    justifyContent: "flex-end"
  },
  justifyContentStretch: {
    justifyContent: "stretch"
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentSpaceEvenly: {
    justifyContent: "space-evenly"
  },
  wrap: {
    flexWrap: "wrap"
  },
  fill: {
    width: "100%",
    height: "100%"
  },
  gapColumnSmall: {
    "> *:not(:last-child)": {
      marginBottom: gapValues["small"]
    }
  },
  gapColumnSmaller: {
    "> *:not(:last-child)": {
      marginBottom: gapValues["smaller"]
    }
  },
  gapColumnMedium: {
    "> *:not(:last-child)": {
      marginBottom: gapValues["medium"]
    }
  },
  gapColumnLarge: {
    "> *:not(:last-child)": {
      marginBottom: gapValues["large"]
    }
  },
  gapSmall: {
    "> *:not(:last-child)": {
      marginRight: gapValues["small"]
    }
  },
  gapSmaller: {
    "> *:not(:last-child)": {
      marginRight: gapValues["smaller"]
    }
  },
  gapMedium: {
    "> *:not(:last-child)": {
      marginRight: gapValues["medium"]
    }
  },
  gapLarge: {
    "> *:not(:last-child)": {
      marginRight: gapValues["large"]
    }
  },
  paddingMedium: {
    ...shorthands.padding(paddingValues["medium"])
  }
});
