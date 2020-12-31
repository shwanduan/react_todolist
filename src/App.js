// import './App.css';
import Todolist from "./components/common/Todolist"
import Calculator from "./components/Calculator/Calculator"
import Expression from "./components/Calculator/Expression"

function App() {
  return (

        <div className='container'>
            <Todolist></Todolist>
           <Calculator></Calculator>
           {/* <Expression></Expression> */}

        </div>
  );
}

export default App;
