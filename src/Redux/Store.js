import { createStore, combineReducers } from 'redux';

import { AuthReducer } from './AuthAction';

const Store = createStore(AuthReducer);

export default Store;
