import { Flex } from "../../../components";
import { FlexItem, Segment } from "@fluentui/react-northstar";
import React from "react";

import { useStyles } from "./FlexItemV9.styles";

export const FlexItemMixed = () => {
  const classes = useStyles();
  return (
      <Flex gap="gap.small" hAlign="center" vAlign="center" className={classes.debug}>
      <FlexItem align="start" size="size.small">
        <Segment content="This cell should be top aligned." />
      </FlexItem>
  
      <FlexItem align="stretch" size="size.small">
        <Segment content="Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus." />
      </FlexItem>
  
      <FlexItem align="center" size="size.small">
        <Segment content="This cell should be center-aligned." />
      </FlexItem>
  
      <FlexItem align="end" size="size.small">
        <Segment content="This cell should be bottom-aligned." />
      </FlexItem>
    </Flex>
  );
}

