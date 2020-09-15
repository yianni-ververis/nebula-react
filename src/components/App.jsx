import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalValuesProvider from './Provider';
import Header from '../containers/Header';
import Home from '../containers/Home';
import Barchart from '../containers/Barchart';
import Linechart from '../containers/Linechart';
import Mekkochart from '../containers/Mekkochart';
import PieChart from '../containers/PieChart';
import FunnelChart from '../containers/FunnelChart';
import SankeyChart from '../containers/SankeyChart';

const App = () => (
  <div>
    <Router>
      <GlobalValuesProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bar-chart/" component={Barchart} />
          <Route exact path="/line-chart/" component={Linechart} />
          <Route exact path="/mekko-chart/" component={Mekkochart} />
          <Route exact path="/pie-chart/" component={PieChart} />
          <Route exact path="/funnel-chart/" component={FunnelChart} />
          <Route exact path="/sankey-chart/" component={SankeyChart} />
          <Route component={Home} />
        </Switch>
      </GlobalValuesProvider>
    </Router>
  </div>
);

export default App;
