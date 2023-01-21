import React from "react";
import {AlternativeAuthenticationMethods} from "./AlternativeAuthenticationMethods";
import {AuthenticationButton} from "../microComponents/AuthenticationButton";

export const RegistrationForm = () => {
    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert('ciao')
    }

    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                <div id="registration-form-error" className='alert alert-danger d-none' role='alert'/>
                <div className={"row mb-3 text-start"}>
                    <div className={"col-6"}>
                        <label className="login-form-label mb-3">Nome</label>
                        <input type="text" className="form-control" id="inputName" required/>
                    </div>
                    <div className={"col-6"}>
                        <label className="login-form-label mb-3">Cognome</label>
                        <input type="text" className="form-control" id="inputCognome" required/>
                    </div>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Password</label>
                    <input type="password" className="form-control" id="InputPassword" required/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Ripeti Password</label>
                    <input type="password" className="form-control" id="InputPassword2" required/>
                </div>

                <AuthenticationButton buttonContent={"Registrati"}/>

                <p id={"login-form-divider"}>
                    <small>REGISTRATI CON</small>
                </p>

                <AlternativeAuthenticationMethods />
            </form>
        </div>
    )
}