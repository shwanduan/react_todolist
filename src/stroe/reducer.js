import {combineReducers} from "redux";
import Todolist from "./TodoList/reducer"
import Calculator from "./Calculator/reducer"

const reducer = combineReducers({
    Todolist,Calculator
})

export default reducer