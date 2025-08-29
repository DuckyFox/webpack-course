import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>О нас</Link>
            <Link to={'/shop'}>Магазин</Link>
            <Suspense fallback={'loading....'}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default App;