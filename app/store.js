import { createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

//const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer, defaultState);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;