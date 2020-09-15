import React, {
  useEffect, useContext, useRef,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GlobalsContext from '../components/Context';

const useStyles = makeStyles((theme) => ({
  vis: {
    position: 'relative',
    flex: 1,
  },
  title: {
    fontSize: '1.9rem',
    fontFamily: 'acumin-pro-extra-condensed',
    fontWeight: 700,
    paddingBottom: 10,
    textAlign: 'center',
    // textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
}));

const Container = () => {
  const classes = useStyles();
  const _GlobalsContext = useContext(GlobalsContext);
  const vizRef = useRef(null);

  const update = async () => {
    // Selections
    const selections = await _GlobalsContext.nebula.selections();
    selections.mount(vizRef.current);
  };

  useEffect(() => {
    if (_GlobalsContext.nebula) update();
  }, [_GlobalsContext]); // eslint-disable-line

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.title}>
        Nebula.js & React template
      </Grid>
      <Grid item xs={12} className={classes.title}>
        <div ref={vizRef} />
      </Grid>
    </Grid>
  );
};

export default Container;
