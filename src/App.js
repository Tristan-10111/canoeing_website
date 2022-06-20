import './App.css';
import { useState, useEffect } from 'react';


const App = () =>{
    const [counter, preCounter] = useState(0);

    useEffect(() => {
        preCounter(100);
    });
    

    return(
        <div className='app'>
            <button onClick={()=> preCounter((prevCounter) => prevCounter -1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => preCounter((prevCounter) => prevCounter + 1)}></button>

        </div>
    )
}
export default App;
