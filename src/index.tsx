import {createRoot} from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./App/Providers/Router";


const root = document.getElementById("root")
const container = createRoot(root)

const router = createBrowserRouter([

])

container.render(
    <AppRouter/>
)