import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

export const AuthenticationRoutes = () => {
    let auth = localStorage.getItem('authenticated');

    return(
        auth !== "true" ? <Outlet /> : null
    )
}