import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import routes from '../../routes';
import NavBar from '../../components/NavBar';
import './index.css';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <NavBar />
      {routes}
    </ConnectedRouter>
  );
};

export default hot(App);
