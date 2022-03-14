import React from "react";

import { Grid } from './../../../components';
import { GridAccessibilityV0 } from "./GridAccessibilityV0";
import { GridAccessibilityV9 } from "./GridAccessibilityV9";

export const GridAccessibility = () => {
  return (
    <Grid columns={2}>
      <div><GridAccessibilityV0 /></div>
      <div><GridAccessibilityV9 /></div>
    </Grid>
  );
}

