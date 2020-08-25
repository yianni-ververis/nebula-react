import React from 'react';
import Grid from '@material-ui/core/Grid';

const Container = () => (
  <Grid container spacing={5}>
    <Grid item md={6} sm={6} xs={12}>
      <h3>Barchart</h3>
      <a href="#/bar-chart/"><img src="assets/barchart.png" alt="barchart" /></a>
    </Grid>
    <Grid item d={6} sm={6} xs={12}>
      <h3>Linechart</h3>
      <a href="#/line-chart/"><img src="assets/linechart.png" alt="linechart" /></a>
    </Grid>
    <Grid item d={6} sm={6} xs={12}>
      <h3>Mekkochart</h3>
      <a href="#/mekko-chart/"><img src="assets/mekkochart.png" alt="mekkochart" /></a>
    </Grid>
    <Grid item d={6} sm={6} xs={12}>
      <h3>Piechart</h3>
      <a href="#/pie-chart/"><img src="assets/piechart.png" alt="piechart" /></a>
    </Grid>
  </Grid>
);

export default Container;
