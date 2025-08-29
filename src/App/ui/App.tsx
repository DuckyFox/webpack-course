import {useState} from 'react';
import classes from './App.module.scss'
import {Outlet} from "react-router-dom";

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="app">
            <h2>{count}</h2>
            <button className={classes.button} onClick={()=>setCount(count+1)}>+</button>
            <button className={classes.button} onClick={()=>setCount(count-1)}>-</button>
        </div>
    );
};

export default App;