import {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import cat from '@shared/assets/cat.jpg'
import Alien from '@shared/assets/alien-svgrepo-com.svg'
import Button from "@shared/Button/ui/Button";

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div data-testid='check' className="app">
            <img src={cat} alt="cat" />
            <div data-testid='check2'>
                <Alien width={'50px'} height={'50px'}/>
            </div>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/about'}>About us</Link>
            <h2 data-testid='check3'>{count}</h2>
            <button className={classes.button} onClick={()=>setCount(count+1)}>+</button>
            <button className={classes.button} onClick={()=>setCount(count-1)}>-</button>
            <Outlet/>
            <Button  variant={'secondary'} label={'test'}/>
        </div>
    );
};

export default App;