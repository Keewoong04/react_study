import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <header>
        <h1><font color = "White">2024 Second Semester</font></h1>
      </header>

      <hr></hr>

      <body>
        <h2><font color = "White">Studies in This Semester</font></h2>

        <ol>
          <font color = "White">
            <li><a> React Study<img src={logo} className="App-logo" alt="logo" height="30" width="30"/></a></li>
            <li><a> JavaScript Study</a></li>
            <li><a> Database Study</a></li>
          </font>
        </ol>
        <h2><font color = "White">Did you enjoy?</font></h2>
        <Button variant="primary">Yes!</Button>
        <button type="button" class="btn btn-danger">No...</button>
      </body>
    </div>
  );
}

export default App;
