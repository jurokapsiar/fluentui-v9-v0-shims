import { Flex } from "../../../components";
import React from "react";
import { Segment } from "../Segment";
import { useStyles } from "./FlexItemColumnV9.styles";

export const FlexItemColumnV9 = () => {
  const classes = useStyles();
  return (
    <>
    <Flex gap="gap.small" padding="padding.medium">
        <Segment className={classes.half} content="1/2" />
        <Segment className={classes.half} content="1/2" />
    </Flex>

    <Flex gap="gap.small" padding="padding.medium">
        <Segment className={classes.quarter} content="1/4" />
        <Segment className={classes.half}  content="1/2" />
        <Segment className={classes.quarter} content="1/4" />
    </Flex>

    <Flex
      gap="gap.small"
      padding="padding.medium"
      style={{
        minHeight: 200,
      }}
    >
        <Segment className={classes.half} content="Full-height, even when my content doesn't fill the space." />
        <Segment  className={classes.half} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque." />
    </Flex>
  </>
  );
}

