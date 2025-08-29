import App from "../../App";

import AboutAsync from "../../../pages/About/ui/About.async";
import ShopAsync from "../../../pages/Shop/ui/Shop.async";
import React from "react";

export const routesMap = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <AboutAsync/>
            },
            {
                path: '/shop',
                element: <ShopAsync/>
            }
        ]
    }
]