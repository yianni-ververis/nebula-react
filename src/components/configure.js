// https://qlik.dev/tutorials/build-a-simple-mashup-using-nebulajs
import { embed } from '@nebula.js/stardust';
import barChart from '@nebula.js/sn-bar-chart';
import lineChart from '@nebula.js/sn-line-chart';
import pieChart from '@nebula.js/sn-pie-chart';
import sankeyChart from '@nebula.js/sn-sankey-chart';
import funneChart from '@nebula.js/sn-funnel-chart';
import mekkoChart from '@nebula.js/sn-mekko-chart';
import filterPane from '@nebula.js/sn-filterpane';

const configure = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: 'filterPane',
      load: () => filterPane,
    },
    {
      name: 'barChart',
      load: () => barChart,
    },
    {
      name: 'lineChart',
      load: () => lineChart,
    },
    {
      name: 'pieChart',
      load: () => pieChart,
    },
    {
      name: 'sankeyChart',
      load: () => sankeyChart,
    },
    {
      name: 'funneChart',
      load: () => funneChart,
    },
    {
      name: 'mekkoChart',
      load: () => mekkoChart,
    },
  ],
});

export default configure;
