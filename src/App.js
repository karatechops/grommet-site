import React from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Grommet } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { aruba } from 'grommet-theme-aruba';
import { hp } from 'grommet-theme-hp';
import { dxc } from 'grommet-theme-dxc';
import { v1 } from 'grommet-theme-v1';
import { Router } from './Router';
import Analytics from './components/Analytics';
import Content from './components/Content';

const THEMES = {
  grommet,
  dark,
  hpe,
  aruba,
  hp,
  dxc,
  v1,
};

const App = ({ initialPath }) => {
  const [themeName, setThemeName] = React.useState('grommet');
  const [search, setSearch] = React.useState();

  React.useEffect(() => {
    if (window.location.search) {
      const {
        location: { search: nextSearch },
      } = window;
      const params = new URLSearchParams(nextSearch);
      setSearch(nextSearch);
      setThemeName(params.get('theme'));
    }
  }, []);

  return (
    <Router initialPath={initialPath} search={search}>
      <Analytics>
        <Grommet theme={THEMES[themeName || 'grommet']}>
          <Content />
        </Grommet>
      </Analytics>
    </Router>
  );
};

App.propTypes = {
  initialPath: PropTypes.string.isRequired,
};

export default App;
