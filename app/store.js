import { createStore, compse} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';

//import data (API-swish)

/*const defaultState = {
	users,
	courts
};*/

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;