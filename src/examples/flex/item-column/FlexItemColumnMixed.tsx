import { Flex } from "../../../components";
import { FlexItem, Segment } from "@fluentui/react-northstar";
import React from "react";

export const FlexItemColumnMixed = () => {
  return (
    <>
    <Flex gap="gap.small" padding="padding.medium">
      <FlexItem size="size.half">
        <Segment content="1/2" />
      </FlexItem>

      <FlexItem size="size.half">
        <Segment content="1/2" />
      </FlexItem>
    </Flex>

    <Flex gap="gap.small" padding="padding.medium">
      <FlexItem size="size.quarter">
        <Segment content="1/4" />
      </FlexItem>

      <FlexItem size="size.half">
        <Segment content="1/2" />
      </FlexItem>

      <FlexItem size="size.quarter">
        <Segment content="1/4" />
      </FlexItem>
    </Flex>

    <Flex
      gap="gap.small"
      padding="padding.medium"
      style={{
        minHeight: 200,
      }}
    >
      <FlexItem size="size.half">
        <Segment content="Full-height, even when my content doesn't fill the space." />
      </FlexItem>

      <FlexItem size="size.half">
        <Segment content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque." />
      </FlexItem>
    </Flex>
  </>
  );
}

