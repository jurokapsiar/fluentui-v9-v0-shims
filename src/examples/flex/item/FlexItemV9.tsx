import { Flex } from "../../../components";
import React from "react";
import { Segment } from "../Segment";
import { useStyles } from "./FlexItemV9.styles";
import { mergeClasses } from "@fluentui/react-components";

export const FlexItemV9 = () => {
  const classes = useStyles();
  return (
      <Flex gap="gap.small" hAlign="center" vAlign="center" debug>
        <Segment className={mergeClasses(classes.start, classes.small)} content="This cell should be top aligned." />  
        <Segment className={mergeClasses(classes.stretch, classes.small)} content="Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus." />
        <Segment className={mergeClasses(classes.center, classes.small)} content="This cell should be center-aligned." />
        <Segment className={mergeClasses(classes.end, classes.small)} content="This cell should be bottom-aligned." />
    </Flex>
  );
}

