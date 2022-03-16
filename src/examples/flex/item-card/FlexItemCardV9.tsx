import { Flex } from "../../../components";
import { Text } from "@fluentui/react-components";
import React from "react";
import { useStyles } from "./FlexItemCardV9.styles";
import { Placeholder } from "../Placeholder";

export const FlexItemCardV9 = () => {
  const classes = useStyles();
  return (
    <Flex gap="gap.medium" padding="padding.medium" className={classes.debug}>
      <div
        className={classes.medium}
        style={{
          position: 'relative',
        }}
      >
        <Placeholder />
      </div>

      <Flex data-flex="true" column gap="gap.small" vAlign="stretch" className={classes.grow}>
        <Flex space="between">
          <Text as="h3">LOREM IPSUM</Text>
          <Text as="pre">"Oct 24th, 00:01</Text>
        </Flex>

        <Text>Man braid iPhone locavore hashtag pop-up, roof party forage heirloom chillwave brooklyn yr 8-bit gochujang blog.</Text>
        <Text as="pre" className={classes.pushColumn}>COPYRIGHT: Fluent UI</Text>
      </Flex>
  </Flex>
  );
}

