import { Button, Flex } from "@fluentui/react-northstar";
import React from "react";

export const FlexLayoutV0 = () => {
  return (
<Flex space="between">
  <Button content="Space" />
  <Flex gap="gap.small">
    <Button content="1" />
    <Button content="2" />
    <Button content="3" />
  </Flex>
</Flex>
  );
}

