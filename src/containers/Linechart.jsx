import React, { useEffect, useContext, useRef } from 'react';
import GlobalsContext from '../components/Context';

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
      type: 'lineChart',
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Date.autoCalendar.YearMonth'] } },
          ],
          qMeasures: [
            { qDef: { qDef: 'Sum([Number of New Cases])', autoSort: false }, qSortBy: { qSortByNumeric: 1 } },
          ],
          qInterColumnSortOrder: [1, 0],
        },
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
          <div ref={vis2Ref} style={{ width: '100%', height: 400 }} />
        </div>
      </div>
    </div>
  );
};

export default Container;
