import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    width: '100%',
  },
  href: {
    paddingLeft: 5,
  },
}));

const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Barchart</h3>
          <a href="#/bar-chart/"><img src="assets/barchart.png" alt="barchart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Linechart</h3>
          <a href="#/line-chart/"><img src="assets/linechart.png" alt="linechart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Combochart</h3>
          <a href="#/combo-chart/"><img src="assets/combochart.png" alt="combochart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Piechart</h3>
          <a href="#/pie-chart/"><img src="assets/piechart.png" alt="piechart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Mekkochart</h3>
          <a href="#/mekko-chart/"><img src="assets/mekkochart.png" alt="mekkochart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Funnelchart</h3>
          <a href="#/funnel-chart/"><img src="assets/funnelchart.png" alt="funnelchart" className={classes.img} /></a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Sankey chart</h3>
          <a href="#/sankey-chart/"><img src="assets/sankeychart.png" alt="sankeychart" className={classes.img} /></a>
        </Grid>
        <Grid item xs={12}>
          <p>
            Github:
            <a href="https://github.com/yianni-ververis/nebula-react" className={classes.href}>https://github.com/yianni-ververis/nebula-react</a>
          </p>

        </Grid>
      </Grid>
    </div>
  );
};

export default Container;
