import {createRoot} from "react-dom/client";
import App from "./App";
import React from "react";

const root = document.getElementById("root")
const container = createRoot(root)
container.render(
    <App/>
)