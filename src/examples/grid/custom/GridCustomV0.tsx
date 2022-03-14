import { Grid } from "@fluentui/react-northstar";
import React from "react";
import { Placeholder } from "../../flex/Placeholder";

export const GridCustomV0 = () => {
  return (
    <Grid rows="2fr repeat(2, 1fr)" columns="repeat(2, 2fr) 3fr 3fr 100px 14rem 50px 20%">
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
      <Placeholder>5</Placeholder>
      <Placeholder>6</Placeholder>
      <Placeholder>7</Placeholder>
      <Placeholder>8</Placeholder>
      <Placeholder>9</Placeholder>
      <Placeholder>10</Placeholder>
    </Grid>
  );
}

