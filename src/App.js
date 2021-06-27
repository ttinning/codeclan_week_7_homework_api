import './App.css'
import SportContainer from "./containers/SportContainer";

function App() {
  return (
    <div>
      <div id="header">
        <h1>ScoreApp</h1>
      </div>
      <div id="main-body">
        <SportContainer/>
      </div>
    </div>
  );
}

export default App;
