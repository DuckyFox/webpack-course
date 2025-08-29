import React from 'react';
import {Suspense} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "../../../Router";

const AppRouter = () => {
    return (
        <Suspense fallback={'aaaaaaa'}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default AppRouter;