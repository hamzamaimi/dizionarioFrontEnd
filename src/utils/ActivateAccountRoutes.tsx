import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

export const ActivateAccountRoutes = () => {
    let auth = localStorage.getItem('authenticated');
    let isAccountActive = localStorage.getItem('isAccountActive');

    let toActivate : boolean = (auth === "true" && isAccountActive === "false");

    return(
        toActivate ? <Outlet /> : <></>
    )
}