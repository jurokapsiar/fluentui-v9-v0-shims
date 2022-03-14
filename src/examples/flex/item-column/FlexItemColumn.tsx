import React from "react";

import { Grid } from './../../../components';
import { FlexItemColumnMixed } from "./FlexItemColumnMixed";
import { FlexItemColumnV0 } from "./FlexItemColumnV0";
import { FlexItemColumnV9 } from "./FlexItemColumnV9";

export const FlexItemColumn = () => {
  return (
    <Grid columns={3}>
      <div><FlexItemColumnV0 /></div>
      <div><FlexItemColumnMixed /></div>
      <div><FlexItemColumnV9 /></div>
    </Grid>
  );
}

