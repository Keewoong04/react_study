import logo from './logo.svg';
import './App.css';
import { Button} from "react-bootstrap"
import Card from './Card';
import Navbar from './Navbar';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      
      <header>
        <h1><font color = "White">2024 Second Semester</font></h1>
        <Navbar/>
      </header>

      <body>
        <h2><font color = "White">Studies in This Semester</font></h2>

        <ol>
          <font color = "White">

          </font>
        </ol>
        <Card />
        
        <h2><font color = "White">Did you enjoy?</font></h2>
        <Button variant="primary">Yes!</Button>
        <button type="button" class="btn btn-danger">No...</button>
      </body>
      
      
    </div>
  );
}

export default App;
