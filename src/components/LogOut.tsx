import React from "react";
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';


export const LogOut = () => {
    const navigate = useNavigate();


    return(<><a onClick={() => {logOut()}}>LogOut</a></>)

    function logOut() {
            axios.post('/eraseJwt', {}, {withCredentials:true}).then(res => {
            console.log(res);
            localStorage.clear();
            window.location.reload();
        })
    }

}