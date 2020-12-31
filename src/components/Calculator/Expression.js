import React ,{Component} from "react"
import store from "../../stroe/index"
import actionCreators from "../../stroe/Calculator/actionCreators"
class Expression extends Component{
    constructor(props){
        super(props)
        this.state = {
             express:store.getState().Calculator
        }
        this.changePre = this.changetotal.bind(this,'prevNumber');
        this.changeNext = this.changetotal.bind(this,'nextNumber');
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                express:store.getState().Calculator
            })
        })
    }
    changetotal(numtype,e){
        actionCreators.change(e.target.value,numtype)      
    }
    getAll(){
        console.log('all')
        actionCreators.getAll()
    }
     render(){ 
         console.log(this.state.express,'=======>express')
          return (
              <div className="flex ">
                  <input type="text" onChange={this.changePre} defaultValue={this.state.express.prevNumber}  className="form-control" />
                  <button type="button" className="btn btn-default" onClick={this.getAll}>+</button>
                  <input type="text" onChange={this.changeNext} defaultValue={this.state.express.nextNumber}   className="form-control" />
                  <span>=</span>
              </div>
          )  
     }
}

export default Expression