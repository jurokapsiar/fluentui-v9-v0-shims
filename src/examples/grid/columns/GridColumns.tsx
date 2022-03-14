import React from "react";

import { Grid } from './../../../components';
import { GridColumnsV0 } from "./GridColumnsV0";
import { GridColumnsV9 } from "./GridColumnsV9";

export const GridColumns = () => {
  return (
    <Grid columns={2}>
      <div><GridColumnsV0 /></div>
      <div><GridColumnsV9 /></div>
    </Grid>
  );
}

