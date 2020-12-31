import React ,{Component} from "react"
import store from "../../stroe"

class TodoInfo extends Component{
    constructor(props){
        super(props)
        this.state =  {
            todos:store.getState().Todolist.todos
        }
    }
    getinfo(){
        let {todos} = this.state;
        let info = {total:0,finish:0,unfinish:0};
        if(!todos.length) return info;
        info.total = todos.length;
         todos.forEach(item=>{
            if(item.isFinished){
                info.finish++
            }else{
                info.unfinish++
            }
        })
        return info
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                todos:store.getState().Todolist.todos
            })
        })
    }
    render(){
         let info = this.getinfo();
        return (
            <div className="alert alert-info">
                  <label className="label label-primary">总共{info.total}条数据</label>
                  <label className="label label-primary">已经完成{info.finish}条数据</label>
                  <label className="label label-primary">未完成{info.unfinish}条数据</label>
            </div>
        )
    }
}

export default TodoInfo