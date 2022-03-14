import React from "react";

import { Grid } from './../../../components';
import { GridCustomV0 } from "./GridCustomV0";
import { GridCustomV9 } from "./GridCustomV9";

export const GridCustom = () => {
  return (
    <Grid columns={2}>
      <div><GridCustomV0 /></div>
      <div><GridCustomV9 /></div>
    </Grid>
  );
}

