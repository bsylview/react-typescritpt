import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from '../reducers';

export function configureStore(initialState?: RootState) {

  const store = createStore(rootReducer, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
