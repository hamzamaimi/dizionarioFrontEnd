import React, { useState } from "react";
import { AuthenticationButton } from "../microComponents/AuthenticationButton";

export const ActivateAccount = () => {
    const [error, setError] = useState("");

    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                {error !== "" ? (<div id="credenzialiErrate" className='alert alert-danger' role='alert'>{error}</div>) : ''}
                
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">
                        Codice OTP
                    </label>
                    <input type="text" className="form-control" id="activationCode" required/>
                </div>

                <AuthenticationButton buttonContent={"Attiva account"}/>  

            </form>
        </div>
    )

    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

}