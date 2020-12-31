import store from "../index"
import {ADD_NEW_TODO,CHANGE_FINISHED,REMOVE_ITEM} from "./cont"
export default{
    addNewtodo(title){
        let action = {
            type:ADD_NEW_TODO,
            title
        }
        //将action派发给store；
        store.dispatch(action);
    },
    changeFinished(id){
        let action = {
            type:CHANGE_FINISHED,
            id
        }
        store.dispatch(action);
    },
    removeitem(id){
          let action = {
            type:REMOVE_ITEM,
            id
          }
          store.dispatch(action)

    }
    
    
}


