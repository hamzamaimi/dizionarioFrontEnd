import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

export const PrivateRoutes = () => {
    let auth = localStorage.getItem('authenticated');

    let toActivate : boolean = (auth === "true");

    return(
        toActivate ? <Outlet /> : <Navigate to={"/login"} />
    )
}