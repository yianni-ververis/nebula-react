import React, { useEffect, useContext, useRef } from 'react';
import GlobalsContext from '../components/Context';
import styles from './styles';

const Container = () => {
  const _GlobalsContext = useContext(GlobalsContext);
  const vis1Ref = useRef(null);
  const vis2Ref = useRef(null);

  const update = async () => {
    // Selections
    const selections = await _GlobalsContext.nebula.selections();
    selections.mount(vis1Ref.current);
    // Funnelchart
    _GlobalsContext.nebula.render({
      element: vis2Ref.current,
      type: 'sankeyChart',
      // fields: ['Case Owner Group', '=Avg([Case Duration Time])'],
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
            { qDef: { qFieldDefs: ['Priority'] }, qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
          ],
          qInterColumnSortOrder: [2, 0, 1],
          qInitialDataFetch: [{
            qWidth: 3,
            qHeight: 3000,
          }],
        },
        showTitles: true,
        title: 'Sankey-chart',
        subtitle: 'Sample supernova sankeychart',
        footnote: '',
      },
    });
  };

  useEffect(() => {
    if (_GlobalsContext.nebula) update();
  }, [_GlobalsContext]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div ref={vis1Ref} />
          <div ref={vis2Ref} style={styles.viz} />
        </div>
      </div>
    </div>
  );
};

export default Container;
