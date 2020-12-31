import state from "./state";
import {GET_ALL,CHANGE_PRE} from "./cont"
const reducer = (preState = state,action)=>{
      let new_state = {...preState}
       switch(action.type){
             case CHANGE_PRE:
              handle.changeValue(new_state,action.num,action.numtype);
             break;
              case GET_ALL:
                  new_state =handle.getall(new_state)
             break;
             default:
                   break;
       }

      return new_state
}
export default reducer


const handle = {
    changeValue(state,num,numtype){
         state[numtype] = num
         return state
    },
    getall(state){
        state.result = eval(state.prevNumber+state.operator+state.nextNumber)
        return state
    }
}