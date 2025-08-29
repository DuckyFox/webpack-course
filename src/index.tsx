import {createRoot} from "react-dom/client";
import App from "./App/ui/App";
import {createBrowserRouter} from "react-router";
import {Suspense} from "react";
import {About} from "./pages/About";
import {Shop} from "./pages/Shop";

const router = [
    {
        path: "/",
        component: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspense><About/></Suspense>
            },
            {
                path: "/shop",
                element: <Suspense><Shop/></Suspense>
            }
        ]
    }
]

const root = document.getElementById("root")
const container = createRoot(root)
container.render(
    <App/>
)