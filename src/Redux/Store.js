import { createStore, combineReducers } from 'redux';
import Reducer from './Actions';

const Store = createStore(Reducer);

export default Store;
