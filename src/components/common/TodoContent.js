import React, { Component } from 'react'
import store from "../../stroe"
import actionCreators from "../../stroe/TodoList/actionCreators"
// const TodoItem = props =>{
//     let  data = props.data
//     return ( <li className="list-group-item">{data.title}</li>)

// }



//无状态组件；
const TodoItem = ({ data }) => {
    const removeitem = () =>{
        actionCreators.removeitem(data.id)
    }
    const changeFinished = () =>{
       
        actionCreators.changeFinished(data.id)
    }
    // let  data = props.data
    return (<li className={"list-group-item" + (data.isFinished ? " finish" : "")}>
         <input onChange={changeFinished} type="checkbox" defaultChecked = {data.isFinished ? "checked" : ""} />
         <span>
            {data.title}
         </span>
         <button type="button" onClick={removeitem} className="close" data-dismiss="modal" aria-label="Close"><i aria-hidden="true">&times;</i></button>
    </li>)
}

class TodoContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: store.getState().Todolist.todos
        }
    }
    componentWillMount() {
        store.subscribe(() => {
            //订阅store的数据变化；
            this.setState({
                todos: store.getState().Todolist.todos
            })
        })
    }
    renderItem() {
        return this.state.todos.map(item => {
            return <TodoItem data={item} key={item.id} />
            //  (<li key={item.id} className="list-group-item">{item.title}</li>)
        })
    }
    render() {
        return (
            <div>
                <ul className='list-group'>
                    {
                        this.renderItem()
                    }
                </ul>
            </div>
        )
    }
}
export default TodoContent