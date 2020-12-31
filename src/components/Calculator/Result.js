import React,{Component} from "react"
import store from "../../stroe/index"
class Result extends Component{
    constructor(props){
        super(props)
        this.state={
            express:store.getState().Calculator.result
        }
    }
componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                express:store.getState().Calculator.result
            })
        })
    }
    render(){
        console.log(this.state.express,"==========>result")
        return (
            <div className="result">
                <button type="button" className="btn btn-default">{this.state.express}</button>
            </div>
        )
    }
}

export default Result;