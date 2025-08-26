import {useState} from 'react';
import './App.scss'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="app">
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    );
};

export default App;