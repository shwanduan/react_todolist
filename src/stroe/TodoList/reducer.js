import state from "./state"
import {ADD_NEW_TODO,CHANGE_FINISHED,REMOVE_ITEM} from "./cont"
const reducer = (prevState = state,action)=>{
    let new_new = {...prevState};
    console.log(new_new,"----->new")
     switch(action.type){
         case ADD_NEW_TODO:
            new_new.todos.push({id:handle.getid(new_new.todos),title:action.title,isFinished:false})  
             break; 
         case CHANGE_FINISHED:
              new_new.todos = handle.changeFinished(new_new.todos,action.id)
             break;
         case REMOVE_ITEM:
            new_new.todos = handle.removeitem(new_new.todos,action.id)
             console.log(handle.removeitem(new_new.todos,action.id),'=======>remove')
             break;
         default:
            break;
     }
     localStorage.todos = JSON.stringify(new_new.todos);
   return new_new 
} 

export default reducer;


const handle = {
    getid(todos){
        let arr = todos.slice(0);
        console.log(arr,'----->arr') 
          if(!arr.length){
              return 1
          }
          return  arr.sort((a,b)=>{
              return b.id - a.id 
          })[0].id +1 
    } ,
    changeFinished(todos,id){
        let arr = todos.slice(0)
        for(var i = 0 ;i< arr.length;i++){
             if(id === arr[i].id){
                 arr[i].isFinished = !arr[i].isFinished
                 break;
             }
           
        }
        return arr
    },
    removeitem(todos,id){
          let arr = todos.slice(0);
          return arr.filter(item=>{
              if(item.id === id)
                  return false
              
              return true
          })
    }
}