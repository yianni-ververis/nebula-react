import React, { useEffect, useContext, useRef } from 'react';
import GlobalsContext from '../components/Context';

const Container = () => {
  const _GlobalsContext = useContext(GlobalsContext);
  const selectionsRef = useRef(null);
  const barchartRef = useRef(null);
  const filterRef = useRef(null);

  const update = async () => {
    // Selections
    const selections = await _GlobalsContext.nebula.selections();
    selections.mount(selectionsRef.current);
    // Barchart
    _GlobalsContext.nebula.render({
      element: barchartRef.current,
      type: 'barChart',
      // fields: ['Case Owner Group', '=Avg([Case Duration Time])'],
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
          ],
          qInterColumnSortOrder: [1, 0],
        },
        showTitles: true,
        title: 'title',
        subtitle: 'subtitle',
        footnote: 'footnote',
      },
    });
    // FilterPane
    _GlobalsContext.nebula.render({
      element: filterRef.current,
      type: 'filterPane',
      fields: ['Case Owner Group'],
    //   properties: {
    //     qHyperCubeDef: {
    //       qDimensions: [
    //         { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
    //       ],
    //       qMeasures: [
    //         { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
    //       ],
    //       qInterColumnSortOrder: [1, 0],
    //     },
    //     showTitles: true,
    //     title: 'title',
    //     subtitle: 'subtitle',
    //     footnote: 'footnote',
    //   },
    });
  };

  useEffect(() => {
    if (_GlobalsContext.nebula) update();
  }, [_GlobalsContext]); // eslint-disable-line

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div ref={selectionsRef} />
          <div ref={filterRef} style={{ width: '100%', height: 100 }} />
          <div ref={barchartRef} style={{ width: '100%', height: 400 }} />
        </div>
      </div>
    </div>
  );
};

export default Container;
