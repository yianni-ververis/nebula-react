import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import embed from './configure';
import connect from './connect';

const nebulaPromise = async () => {
  // const res = await fetch('https://localhost:8081/infos');
  // const x = await res.json();
  // console.log(x);
  const app = await connect({
    // R&D Stag Cloud
    // url: x.hostname,
    // appId: x.appId,
    // webIntegrationId: x.webId,
    // Cloud Working
    // url: 'showcase.eu.qlikcloud.com',
    // appId: '54d244e3-757d-4982-8628-f945eb275551',
    // webIntegrationId: 'EkckpfKS1k-4Hf6ybkPpnyowzZ5edilA',
    // Prod Working
    url: 'sense-demo.qlik.com',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  });
  return embed(app);
};
const GlobalValuesProvider = ({ children }) => {
  const [nebula, setNebula] = useState(null);

  const init = async () => {
    const _nebula = await nebulaPromise();
    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Context.Provider value={{
      nebula,
    }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalValuesProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
GlobalValuesProvider.defaultProps = [];

export default GlobalValuesProvider;
