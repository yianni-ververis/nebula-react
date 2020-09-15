import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import embed from './configure';
import connect from './connect';

const nebulaPromise = async () => {
  const app = await connect({
    // webIntegrationId: '',
    url: '',
    appId: '',
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
