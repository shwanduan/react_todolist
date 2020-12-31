import React,{Component} from "react"
import Expression from "./Expression"
import Result from "./Result"
import "./index.scss"
class Calculator extends Component{
    // constructor(props){
    //     super(props)

    // }
    render(){
        return (
            <div className="Calculator flex  btn-group">
                  <Expression></Expression>
                  <Result></Result>
            </div>
        )
    }
}

export default Calculator