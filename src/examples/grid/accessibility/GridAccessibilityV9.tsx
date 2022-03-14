import { Button } from "@fluentui/react-components";
import { useTabsterAttributes } from "@fluentui/react-tabster"
import React from "react";
import { Grid } from "../../../components";
import { Placeholder } from "../../flex/Placeholder";

export const GridAccessibilityV9 = () => {
  const arrowKeyNavigationAttributes = useTabsterAttributes({ //TODO: useArrowNavigationGroup
    mover: {
      direction: 3
    }
  })
  return (
    <>
    <Grid {...arrowKeyNavigationAttributes} columns={3} role="menu">
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
    <Grid {...arrowKeyNavigationAttributes} rows={3} role="menu">
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

