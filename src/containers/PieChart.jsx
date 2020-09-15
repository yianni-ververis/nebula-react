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
    // Barchart
    _GlobalsContext.nebula.render({
      element: vis2Ref.current,
      type: 'pieChart',
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Avg([Case Duration Time])' } },
          ],
          qInitialDataFetch: [{
            qWidth: 2,
            qHeight: 100,
          }],
        },
        showTitles: true,
        title: 'Pie-chart',
        subtitle: 'Sample supernova piechart',
        footnote: '',
      },
    });
  };

  useEffect(() => {
    if (_GlobalsContext.nebula) update();
  }, [_GlobalsContext]); // eslint-disable-line

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
