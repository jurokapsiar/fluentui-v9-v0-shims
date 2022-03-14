import React from "react";

import { Grid } from './components';
import { FlexAlign } from "./examples/flex/align/FlexAlign";
import { FlexLayout } from "./examples/flex/layout/FlexLayout";
import { FlexItem } from "./examples/flex/item/FlexItem";
import { FlexItemColumn } from "./examples/flex/item-column/FlexItemColumn";
import { FlexItemCard } from "./examples/flex/item-card/FlexItemCard";

export const FlexExample = () => {
  return (
    <>
    <Grid columns={3}>
      <div>v0</div>
      <div>Flex migrated to v9</div>
      <div>Flex and children migrated to v9</div>
    </Grid>
    <h3>Align</h3>
    <FlexAlign />
    <h3>Layout (gap + space)</h3>
    <FlexLayout />
    <h3>Item</h3>
    <FlexItem />
    <h3>Item Column</h3>
    <FlexItemColumn />
    <h3>Item Card</h3>
    <FlexItemCard />
    </>
  );
}

