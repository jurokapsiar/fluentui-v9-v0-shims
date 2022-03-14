import { Button } from "@fluentui/react-components";
import React from "react";
import { Flex } from "../../../components";

export const FlexLayoutV9 = () => {
  return (
<Flex space="between">
  <Button>Space</Button>
  <Flex gap="gap.small">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Flex>
</Flex>
  );
}

