import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/RootReducer';
import rootSaga from '../sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState?: any) {
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

  const anyModule = module as any;
  if (anyModule) {
    anyModule.hot.accept('../reducers/RootReducer.ts', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
