import React, { useEffect, useState } from "react";
import {AlternativeAuthenticationMethods} from "./AlternativeAuthenticationMethods";
import {AuthenticationButton} from "../microComponents/AuthenticationButton";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import App from "../App";

export const RegistrationForm = (props : {setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [error, setError] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();


    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => submitRegistrationForm(e)}>
                {error !== "" ? (<div className='alert alert-danger' role='alert'>{error}</div>) : ''}

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
                    <input type="password" className="form-control" id="InputPassword1" required/>
                </div>

                <AuthenticationButton buttonContent={"Registrati"}/>

                <p id={"login-form-divider"}>
                    <small>REGISTRATI CON</small>
                </p>

                <AlternativeAuthenticationMethods />
            </form>
        </div>
    )

    function submitRegistrationForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const name:String = (document.getElementById("inputName") as HTMLInputElement).value;
        const surname:String = (document.getElementById("inputCognome") as HTMLInputElement).value;
        const email:string = (document.getElementById("inputEmail") as HTMLInputElement).value;
        const password:string = (document.getElementById("InputPassword") as HTMLInputElement).value;
        const password1:string = (document.getElementById("InputPassword1") as HTMLInputElement).value;
        
        if(!isPasswordMatch(password, password1)){
            setError('Le password devono coincidere!')
            return;
        }
        
        axios.post("/registration", 
            { "name": name, "surname": surname, "email": email, "password": password}, {withCredentials: true}).then(res => {
                
                if (res.data.hasOwnProperty("error")) {
                    handleError(res.data.error);
                    return;
                }
                
                if(!res.data.isAccountActive){
                    localStorage.setItem("authenticated", "true");
                    if(props.setIsAccountActive != null){
                        props.setIsAccountActive(false);
                    }
                }

                navigate('/activateAccount', {replace:true});

            })

    }

    function handleError(error: string) {
        switch(error){
            case "name and surname are required":
                setError('Il nome e il cognome sono obbligatori!');
                break;
            case "name and surname must contain only letters":
                setError('Il nome e cognome devono contenere solo lettere!')
                break;
            case "invalid email format":
                setError('Formato E-mail non valido!')
                break;
            case "email already taken":
                setError('E-mail già utilizzata')
                break;
            case "password obsolete":
                setError('La password dovrebbe contenere almeno 8 caratteri,' +
                'dei quali almeno una lettera, un numero e un carattere speciale (@.$!%*#?&)')
                break;
            
        }
    }
    

}

function isPasswordMatch(password: string, password1: string) {
    return (password === password1) ? true : false;
}
