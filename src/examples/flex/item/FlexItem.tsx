import React from "react";

import { Grid } from './../../../components';
import { FlexItemMixed } from "./FlexItemMixed";
import { FlexItemV0 } from "./FlexItemV0";
import { FlexItemV9 } from "./FlexItemV9";

export const FlexItem = () => {
  return (
    <Grid columns={3}>
      <div><FlexItemV0 /></div>
      <div><FlexItemMixed /></div>
      <div><FlexItemV9 /></div>
    </Grid>
  );
}

