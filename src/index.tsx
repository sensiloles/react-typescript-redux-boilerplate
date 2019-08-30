import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

const render = (): void => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept('./containers/App', (): void => {
    render();
  });
}
