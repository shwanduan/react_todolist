import store from "../index"
import {CHANGE_PRE,GET_ALL} from "./cont"
export default {
    change(num,numtype){
       let actions ={
           type:CHANGE_PRE,
           num,
           numtype
       }
       store.dispatch(actions);
    },
    getAll(){
        let actions ={
            type:GET_ALL
        }
        store.dispatch(actions);
     }
    
}