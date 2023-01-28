import React, { useState } from "react";
import axios from "../api/axios";
import { AuthenticationButton } from "../microComponents/AuthenticationButton";

export const ActivateAccount = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                {error !== "" ? (<div className='alert alert-danger' role='alert'>{error}</div>) : ''}
                {success !== "" ? (<div className='alert alert-success' role='alert'>{success}</div>) : ''}
                
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">
                        Codice OTP
                    </label>
                    <input type="text" className="form-control" id="activationCode" required/>
                </div>

                <AuthenticationButton buttonContent={"Attiva account"}/>

                <a href="#" onClick={() => resendActivationCode()}>Rispedisci codice</a>  

            </form>
        </div>
    )

    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }


    function resendActivationCode(): React.MouseEventHandler<HTMLAnchorElement> | void {
        axios.post("/resendActivationCode", {}, {withCredentials: true}).then(res => {
            if (res.data.hasOwnProperty("error")) {
                handleError(res.data.error);
                return;
            }
            else if(res.data.hasOwnProperty("success")){
                handleSuccess(res.data);
            }
        })
    }


    function handleError(error: any) {
        switch(error){
            case "authentication token is missing.":
                setError('Errore durante l\'autenticazione, prego riesigure l\'accesso.');
            break;
        }
    }

    function handleSuccess(data: any) {
        const email = new String(data.email);

        switch(data.success){
            case "email has been sent.":
                setSuccess('L\'email è stata spedita al seguente indirizzo: \n'+ email);
            break;
        }
    }
}
