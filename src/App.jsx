import "./App.css";
import Ref from "./components/ref/Ref";
import Timer from "./components/timer/Timer";
import RefDom from "./components/ref/RefDom";
import UseReducer from "./components/reducer/UseReducer";
import Counter from "./components/reducer/Counter";
import Name from "./redux/components/Name";
import Details from "./redux/components/Details";
import Nav from "./redux/components/Nav";
import City from "./redux/components/City";
function App() {
  return (
    <div className="app">
      <Nav />
      <div className="subAppContainer">
        <Name />
        <City />
      </div>
      <br />
      <hr />
      <Details />

      <Counter />
      <UseReducer />
      <RefDom />
      <Ref />
      <Timer />
    </div>
  );
}

export default App;
