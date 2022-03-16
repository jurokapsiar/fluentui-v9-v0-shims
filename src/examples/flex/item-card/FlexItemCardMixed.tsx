import { Flex } from "../../../components";
import { FlexItem, Text } from "@fluentui/react-northstar";
import React from "react";
import { useStyles } from "./FlexItemCardV9.styles";
import { Placeholder } from "../Placeholder";

export const FlexItemCardMixed = () => {
  const classes = useStyles();
  return (
    <Flex gap="gap.medium" padding="padding.medium" className={classes.debug}>
    <FlexItem size="size.medium">
      <div
        style={{
          position: 'relative',
        }}
      >
        <Placeholder />
      </div>
    </FlexItem>

    <FlexItem grow>
      <Flex column gap="gap.small" vAlign="stretch">
        <Flex space="between">
          <Text as="h3" content="LOREM IPSUM" />
          <Text as="pre" content="Oct 24th, 00:01" />
        </Flex>

        <Text content="Man braid iPhone locavore hashtag pop-up, roof party forage heirloom chillwave brooklyn yr 8-bit gochujang blog." />

        <FlexItem push>
          <Text as="pre" content="COPYRIGHT: Fluent UI." />
        </FlexItem>
      </Flex>
    </FlexItem>
  </Flex>
  );
}

