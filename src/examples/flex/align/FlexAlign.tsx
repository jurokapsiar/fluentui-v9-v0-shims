import React from "react";

import { Grid } from './../../../components';
import { FlexAlignV0 } from "./FlexAlignV0";
import { FlexAlignV9 } from "./FlexAlignV9";

export const FlexAlign = () => {
  return (
    <Grid columns={3}>
      <div><FlexAlignV0 /></div>
      <div></div>
      <div><FlexAlignV9 /></div>
    </Grid>
  );
}

