import {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import cat from '@shared/assets/cat.jpg'
import Alien from '@shared/assets/alien-svgrepo-com.svg'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="app">
            <img src={cat} alt="cat" />
            <div>
                <Alien width={'50px'} height={'50px'}/>
            </div>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/about'}>About us</Link>
            <h2>{count}</h2>
            <button className={classes.button} onClick={()=>setCount(count+1)}>+</button>
            <button className={classes.button} onClick={()=>setCount(count-1)}>-</button>
            <Outlet/>
        </div>
    );
};

export default App;