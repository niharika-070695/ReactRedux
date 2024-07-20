import "./App.css";
import Ref from "./components/ref/Ref";
import Timer from "./components/timer/Timer";
import RefDom from "./components/ref/RefDom";
import UseReducer from "./components/reducer/UseReducer";
function App() {
  return (
    <div className="app">
      <UseReducer />
      <RefDom />
      <Ref />
      <Timer />
    </div>
  );
}

export default App;
