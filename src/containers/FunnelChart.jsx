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
      type: 'funneChart',
      // fields: ['Case Owner Group', '=Avg([Case Duration Time])'],
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
          ],
          qMeasures: [
            { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
          ],
          qInterColumnSortOrder: [1, 0],
          qInitialDataFetch: [{
            qWidth: 2,
            qHeight: 5000,
          }],
        },
        showTitles: true,
        title: 'Funnel-chart',
        subtitle: 'Sample supernova funnelchart',
        footnote: 'Case Owner Group / Avg([Case Duration Time])',
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
