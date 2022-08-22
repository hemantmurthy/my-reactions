import ClassComponent from "./features/ClassComponent";
import FunctionComponent from "./features/FunctionComponent";
import Counter from "./features/Counter";
import FunctionCounter from "./features/FunctionCounter";
import FunctionAltCounter from "./features/FunctionAltCounter";

function App() {
  return (
  <div>
    <h1><i>My</i> React<i>ions</i></h1>
    <ClassComponent name="Slartibartfast"/>
    <FunctionComponent name="Beeblebrox"/>
    <h1>Counter components</h1>
    <Counter/>
    <Counter interval="2000"/>
    <FunctionCounter/>
    <FunctionAltCounter interval="1500"/>
  </div>
  );
}

export default App;
