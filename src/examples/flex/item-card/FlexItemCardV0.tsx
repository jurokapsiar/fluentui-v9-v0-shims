import { Flex, Text } from "@fluentui/react-northstar";
import React from "react";
import { Placeholder } from "../Placeholder";

export const FlexItemCardV0 = () => {
  return (
    <Flex gap="gap.medium" padding="padding.medium" debug>
    <Flex.Item size="size.medium">
      <div
        style={{
          position: 'relative',
        }}
      >
        <Placeholder />
      </div>
    </Flex.Item>

    <Flex.Item grow>
      <Flex column gap="gap.small" vAlign="stretch">
        <Flex space="between">
          <Text as="h3" content="LOREM IPSUM" />
          <Text as="pre" content="Oct 24th, 00:01" />
        </Flex>

        <Text content="Man braid iPhone locavore hashtag pop-up, roof party forage heirloom chillwave brooklyn yr 8-bit gochujang blog." />

        <Flex.Item push>
          <Text as="pre" content="COPYRIGHT: Fluent UI." />
        </Flex.Item>
      </Flex>
    </Flex.Item>
  </Flex>
  );
}

