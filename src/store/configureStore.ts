import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/RootReducer';
import rootSaga from '../sagas';
import { ApplicationState } from '../types';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState?: any): Store<ApplicationState> {
  let middleware = [sagaMiddleware, routerMiddleware(history)];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }

  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    compose(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  if ((module as any).hot && process.env.NODE_ENV !== 'production') {
    (module as any).hot.accept('../reducers/RootReducer.ts', (): void => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
