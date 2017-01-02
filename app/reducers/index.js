import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courts from './courts';

const rootReducer = combineReducers({courts, routing: routerReducer});

export default rootReducer;