import ClassComponent from "./features/class-component";
import FunctionComponent from "./features/function-component";
import Counter from "./features/counter";

function App() {
  return (
  <div>
    <h1><i>My</i> React<i>ions</i></h1>
    <ClassComponent name="Slartibartfast"/>
    <FunctionComponent name="Beeblebrox"/>
    <Counter/>
    <Counter interval="2000"/>
  </div>
  );
}

export default App;
