import React from "react";
import { Grid } from "../../../components";
import { Placeholder } from "../../flex/Placeholder";
import { useStyles } from "./GridCustomV9.styles";

export const GridCustomV9 = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.custom}>
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

