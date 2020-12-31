import React,{Component} from "react"
import store from "../../stroe";
 import  actionCreators from '../../stroe/TodoList/actionCreators'


class TodoInput extends Component{
    constructor(props){
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    // componentWillMount(){
    //     store.subscribe(
    //         this.setState({

    //         })
    //     )
    // }
    handleKeyUp(e){
        console.log(this,e)
        // console.log(e.target.value)
        // console.log(this.el.value,'ellele')
        if(e.keyCode === 13){
            if(!e.target.value.trim()) return false;
           actionCreators.addNewtodo(e.target.value)
           e.target.value = ""
        }
    }
    render(){ 
        return (
                     <input  onKeyUp={this.handleKeyUp} type='text' className="form-control"/>
        )
    }
}

export default TodoInput;