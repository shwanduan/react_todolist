import {createStore} from "redux"
import reducer from "./reducer"
// const createStore = require('redux').createStore;
const store  = createStore(reducer);
export default store;