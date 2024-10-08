import { useState } from "react";

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
       </> 
    )
}