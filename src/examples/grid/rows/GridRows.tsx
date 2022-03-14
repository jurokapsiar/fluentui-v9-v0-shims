import React from "react";

import { Grid } from './../../../components';
import { GridRowsV0 } from "./GridRowsV0";
import { GridRowsV9 } from "./GridRowsV9";

export const GridRows = () => {
  return (
    <Grid columns={2}>
      <div><GridRowsV0 /></div>
      <div><GridRowsV9 /></div>
    </Grid>
  );
}

