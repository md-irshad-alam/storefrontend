import Reducer from "./Actions";
import { createStore, combineReducers } from "redux";

const Store = createStore(Reducer);

export default Store;
