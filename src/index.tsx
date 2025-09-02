import {createRoot} from "react-dom/client";
import App from "@/app/ui/App";
import {createBrowserRouter} from "react-router";
import {Suspense} from "react";
import {About} from "@pages/About";
import {Shop} from "@pages/Shop";
import {RouterProvider} from "react-router-dom";

const routesMap = [
    {
        path: "/",
        element: <App/>,
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

const router = createBrowserRouter(routesMap)

const root = document.getElementById("root")
const container = createRoot(root)
container.render(
    <RouterProvider router={router}/>
)