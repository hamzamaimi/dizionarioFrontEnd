import React from "react";
import { Outlet } from "react-router-dom";

export const ApplicationRoutes = () => {
    let auth = localStorage.getItem('authenticated');
    let isAccountActive = localStorage.getItem('isAccountActive');

    let active : boolean = (auth === "true" && isAccountActive === "true");

    return(
        active ? <Outlet /> : <></>
    )
}