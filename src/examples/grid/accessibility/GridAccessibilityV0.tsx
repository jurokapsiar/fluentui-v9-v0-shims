import { Grid, Button, gridBehavior } from "@fluentui/react-northstar";
import React from "react";

export const GridAccessibilityV0 = () => {
  return (
    <>
    <Grid accessibility={gridBehavior} columns={3} role="menu">
      <Button role="menuitem">1</Button>
      <Button role="menuitem">2</Button>
      <Button role="menuitem">3</Button>
      <Button role="menuitem">4</Button>
      <Button role="menuitem">5</Button>
      <Button role="menuitem">6</Button>
      <Button role="menuitem">7</Button>
      <Button role="menuitem">8</Button>
      <Button role="menuitem">9</Button>
      <Button role="menuitem">10</Button>
    </Grid>
    <Grid accessibility={gridBehavior} rows={3} role="menu">
      <Button role="menuitem">1</Button>
      <Button role="menuitem">2</Button>
      <Button role="menuitem">3</Button>
      <Button role="menuitem">4</Button>
      <Button role="menuitem">5</Button>
      <Button role="menuitem">6</Button>
      <Button role="menuitem">7</Button>
      <Button role="menuitem">8</Button>
      <Button role="menuitem">9</Button>
      <Button role="menuitem">10</Button>
    </Grid>
    </>
  );
}

