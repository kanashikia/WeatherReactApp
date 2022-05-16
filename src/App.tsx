import "./App.css";
import DisplayForm from "./components/display-form/DisplayForm";
import Display from "./components/display/Display";

function App() {
  return (
    <div className="app">
      <DisplayForm></DisplayForm>
      <div id="card-container">
        <Display type="current" className="card-element"></Display>
        <Display type="tomorrow" className="card-element"></Display>
      </div>
    </div>
  );
}

export default App;
