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
      type: 'mekkoChart',
      // fields: ['Case Owner Group', 'Priority', '=Count([Case Is Closed])'],
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Case Owner Group'] } },
            { qDef: { qFieldDefs: ['Priority'] } },
          ],
          qMeasures: [
            { qDef: { qDef: '=Count([Case Is Closed])' } },
          ],
          qInterColumnSortOrder: [2, 0, 1],
          qInitialDataFetch: [{
            qWidth: 3,
            qHeight: 100,
          }],
        },
        showTitles: true,
        title: 'title',
        subtitle: 'subtitle',
        footnote: 'footnote',
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
