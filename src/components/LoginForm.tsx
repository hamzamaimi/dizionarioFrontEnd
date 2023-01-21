import React from "react";
import axios from 'axios';
import {AlternativeAuthenticationMethods} from "./AlternativeAuthenticationMethods";
import {AuthenticationButton} from "../microComponents/AuthenticationButton";

export const LoginForm = () => {

    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                <div id="credenzialiErrate" className='alert alert-danger d-none' role='alert'>Credenziali errate!</div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Password</label>
                    <input type="password" className="form-control" id="InputPassword" required/>
                </div>

                <AuthenticationButton buttonContent={"Log In"}/>

                <p id={"login-form-divider"}>
                    <small>ACCEDI CON</small>
                </p>

                <AlternativeAuthenticationMethods />
            </form>
        </div>
    )
}

let checkForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
}

function login() {
    let email:string = (document.getElementById("inputEmail") as HTMLInputElement).value;
    let password:string = (document.getElementById("InputPassword") as HTMLInputElement).value;

    axios.post("http://localhost:8080/login", { "email": email, "password": password}).then(res => {
        if (res.data.hasOwnProperty("error")) {
            let wrongCredentials = document.getElementById("credenzialiErrate");

            if(wrongCredentials !== null){
                wrongCredentials.classList.remove("d-none")
            }
        }

    })
}