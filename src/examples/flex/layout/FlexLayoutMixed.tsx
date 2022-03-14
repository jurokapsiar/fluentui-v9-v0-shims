import { Flex } from "../../../components";
import { Button } from "@fluentui/react-northstar";
import React from "react";

export const FlexLayoutMixed = () => {
  return (
<Flex space="between">
  <Button>Space</Button>
  <Flex gap="gap.small">
    <Button content="1" />
    <Button content="2" />
    <Button content="3" />
  </Flex>
</Flex>
  );
}

