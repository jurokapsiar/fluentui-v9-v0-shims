import React from "react";

import { Grid } from './../../../components';
import { FlexItemCardMixed } from "./FlexItemCardMixed";
import { FlexItemCardV0 } from "./FlexItemCardV0";
import { FlexItemCardV9 } from "./FlexItemCardV9";

export const FlexItemCard = () => {
  return (
    <Grid columns={3}>
      <div><FlexItemCardV0 /></div>
      <div><FlexItemCardMixed /></div>
      <div><FlexItemCardV9 /></div>
    </Grid>
  );
}

