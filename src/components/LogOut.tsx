import React from "react";
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';


export const LogOut = () => {
    const navigate = useNavigate();


    return(<>
            <a id="logoutAnchor" style={{cursor: 'pointer'}} onClick={() => {logOut()}}>
                <img src="images/logout.png" width={"24"} height={"24"}/>
            </a>
        </>)

    function logOut() {
            axios.post('/eraseJwt', {}, {withCredentials:true}).then(res => {
            console.log(res);
            localStorage.clear();
            window.location.reload();
        })
    }

}