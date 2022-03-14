import React from "react";

import { Grid } from './components';
import { GridAccessibility } from "./examples/grid/accessibility/GridAccessibility";
import { GridColumns } from "./examples/grid/columns/GridColumns";
import { GridCustom } from "./examples/grid/custom/GridCustom";
import { GridRows } from "./examples/grid/rows/GridRows";
import { GridStandard } from "./examples/grid/standard/GridStandard";

export const GridExample = () => {
  return (
    <>
    <Grid columns={2}>
      <div>v0</div>
      <div>Grid migrated to v9</div>
    </Grid>
    <h3>Standard</h3>
    <GridStandard />
    <h3>Rows</h3>
    <GridRows />
    <h3>Columns</h3>
    <GridColumns />
    <h3>Custom</h3>
    <GridCustom />
    <h3>Accessibility</h3>
    <GridAccessibility />
    </>
  );
}

