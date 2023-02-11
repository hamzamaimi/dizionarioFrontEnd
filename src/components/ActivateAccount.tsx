import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { AuthenticationButton } from "../microComponents/AuthenticationButton";
import { useNavigate } from 'react-router-dom';

export const ActivateAccount = (props : {setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [firstSendMessage, setfirstSendMessage] = useState("");
    const [isSented, setIsSented] = useState(false);

    useEffect(()=>{
        let accountActive = localStorage.getItem('isAccountActive');
        if(accountActive === "true"){
            navigate('/homePage', {replace:true});
        }
    })

    if(firstSendMessage=="" && localStorage.getItem("userEmail") != null){
        setfirstSendMessage("Codice di attivazione spedito all' email: \n" + localStorage.getItem("userEmail"));
    }

    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                <div>
                    {error !== "" ? (<div className='alert alert-danger' role='alert'>{error}</div>) : ''}
                    {success !== "" ? (<div className='alert alert-success' role='alert'>{success}</div>) : ''}
                    {firstSendMessage !== "" ? (<div className='alert alert-success' id="firstSendMessage" role='alert'>{firstSendMessage}</div>) : ''}
                    
                    <div className="mb-3 text-start">
                        <label className="login-form-label mb-3">
                            Codice OTP
                        </label>
                        <input type="text" className="form-control" id="activationCode" required/>
                    </div>

                    <AuthenticationButton buttonContent={"Attiva account"} classes={"mb-4"}/>

                    <a id="resendAnchor" href="#" onClick={() => resendActivationCode()}>Rispedisci codice</a>
                    <br/>  
                    <div id="activateAccountSpinner" className="spinner-border text-primary d-none" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </form>
        </div>
    )

    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        activateAccountPostRequest();
    }

    function activateAccountPostRequest(){
        const otpCode : string = (document.getElementById("activationCode") as HTMLInputElement).value;
        axios.post('/activateAccount', {
            'activationCode' : otpCode
        }, {withCredentials: true}).then(res => {
            localStorage.removeItem('userEmail');
            setfirstSendMessage('');
            if (res.data.hasOwnProperty("error")) {
                handleError(res.data.error);
                return;
            }
            if(res.data.hasOwnProperty("success")){
                handleSuccess(res.data);
            }

        })
    }

    function resendActivationCode(): React.MouseEventHandler<HTMLAnchorElement> | void {
        document.getElementById("firstSendMessage")?.classList.add('d-none');
        if(!isSented){
            axios.post("/resendActivationCode", {}, {withCredentials: true}).then(res => {
                if (res.data.hasOwnProperty("error")) {
                    handleError(res.data.error);
                    return;
                }
                if(res.data.hasOwnProperty("success")){
                    handleSuccess(res.data);
                }
            })
            setIsSented(true);
        }
    }


    function handleError(error: any) {
        switch(error){
            case "authentication token is missing." || "user not found.":
                setError('Errore durante l\'autenticazione, la preghiamo di riesiguire l\'accesso.');
                break;
            case "activation code is wrong!":
                setError('Il codice immesso è errato!');
                break;
            case "activation code has been changed!":
                setError('Hai superato il numero massimo di tentativi, Per attivare l\'account rispedisci il codice di attivazione utilizzando il pulsante in basso!');
                break;
        }
    }

    function handleSuccess(data: any) {
        const email = new String(data.email);

        switch(data.success){
            case "email has been sent.":
                setSuccess('Codice di attivazione spedito all\' email: \n \n'+ email);
                break;
            case "account is been activated.":
                setSuccess('L\'account è stato attivato, a breve verrai rediretto alla HomePage');
                redirectHomePage();
                break;
        }
    }

    function redirectHomePage(){
        document.getElementById('activateAccountSpinner')?.classList.remove("d-none");
        localStorage.setItem("isAccountActive", "true");

        setTimeout(function() {
            navigate('/homePage', {replace : true})
        }, 3000);
    }
}
