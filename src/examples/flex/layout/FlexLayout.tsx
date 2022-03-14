import React from "react";

import { Grid } from './../../../components';
import { FlexLayoutMixed } from "./FlexLayoutMixed";
import { FlexLayoutV0 } from "./FlexLayoutV0";
import { FlexLayoutV9 } from "./FlexLayoutV9";

export const FlexLayout = () => {
  return (
    <Grid columns={3}>
      <div><FlexLayoutV0 /></div>
      <div><FlexLayoutMixed /></div>
      <div><FlexLayoutV9 /></div>
    </Grid>
  );
}

