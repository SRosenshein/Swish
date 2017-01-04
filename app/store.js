import { createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';
import mySaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

//import data (API-swish)

const defaultState = {
	//users,
	//courts
};

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), defaultState);
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer, defaultState);

sagaMiddleware.run(mySaga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;