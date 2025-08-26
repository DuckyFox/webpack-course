import {createRoot} from "react-dom/client";
import App from "./App/ui/App";

const root = document.getElementById("root")
const container = createRoot(root)
container.render(
    <App/>
)