import React,{Component} from 'react'
import TodoContent from "./TodoContent"
import TodoInput from "./TodoInput"
import TodoInfo from "./TodoInfo"
import './index.scss'
class Todolist extends Component{
    render(){
         return (
             <div className="container" >
                 <TodoInput></TodoInput>
                 <TodoContent></TodoContent>
                 <TodoInfo/>
             </div>
         )
    }
}
export default Todolist