import React from "react";

import { Grid } from './../../../components';
import { GridStandardV0 } from "./GridStandardV0";
import { GridStandardV9 } from "./GridStandardV9";

export const GridStandard = () => {
  return (
    <Grid columns={2}>
      <div><GridStandardV0 /></div>
      <div><GridStandardV9 /></div>
    </Grid>
  );
}

