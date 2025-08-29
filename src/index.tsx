import {createRoot} from "react-dom/client";
import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

import Shop from "../pages/Shop";
import About from "../pages/About";

const root = document.getElementById("root")
const container = createRoot(root)

const router = createBrowserRouter([

])

container.render(
    <RouterProvider router={router} />
)