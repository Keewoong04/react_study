import { useState } from "react";
import {Button} from "react-bootstrap"

export default function Counter()
{
    const [count, setCount] = useState(0);
    const handleButtonCLick = () =>
    {
        setCount(count + 1);
    }
    return(
       <>
       <p><font color = "White">{count}</font></p>
       <button onClick={handleButtonCLick}>Counter</button>
       <h2><font color = "White">Did you enjoy?</font></h2>
       <Button variant="primary">Yes!</Button>
       <button type="button" class="btn btn-danger">No...</button>
       </> 
              
    )
}