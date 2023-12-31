import React, {useEffect, useState} from "react";
import axios from '../api/axios';
import {AlternativeAuthenticationMethods} from "./AlternativeAuthenticationMethods";
import {AuthenticationButton} from "../microComponents/AuthenticationButton";
import { useNavigate } from "react-router-dom";

export const LoginForm =  (props : {setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    useEffect(()=>{
        navigateToHomeOrActivationPage();
    })
   
    return(
        <div className={"mx-auto authentication-form-container"}>
            <form onSubmit={(e) => checkForm(e)}>
                <div>
                    {error !== "" ? (<div className='alert alert-danger' role='alert'>{error}</div>) : ''}
                    
                    <div className="mb-3 text-start">
                        <label className="login-form-label mb-3">Email</label>
                        <input type="email" className="form-control" id="inputEmail" required/>
                    </div>
                    <div className="mb-4 text-start">
                        <label className="login-form-label mb-3">Password</label>
                        <input type="password" className="form-control" id="InputPassword" required/>
                    </div>

                    <AuthenticationButton buttonContent={"Log In"}/>

                    <p id={"login-form-divider"}>
                        <small>ACCEDI CON</small>
                    </p>

                    <AlternativeAuthenticationMethods />
                </div>
            </form>
        </div>
    )


    function login(setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>) {
        let email:string = (document.getElementById("inputEmail") as HTMLInputElement).value;
        let password:string = (document.getElementById("InputPassword") as HTMLInputElement).value;

        axios.post("/login", { "email": email, "password": password}, {withCredentials: true}).then(res => {
            if (res.data.hasOwnProperty("error")) {
                handleError(res.data.error);
                return;
            }
            localStorage.setItem("authenticated", "true");
                
            if(!res.data.isAccountActive){
                if(props.setIsAccountActive != null){
                    localStorage.setItem("isAccountActive", "false");
                    localStorage.setItem("userEmail", res.data.userEmail);
                    props.setIsAccountActive(false);
                }
                navigateToHomeOrActivationPage()
                return
            }else{
                if(props.setIsAccountActive != null){
                    localStorage.setItem("isAccountActive", "true");
                    localStorage.setItem("userEmail", res.data.userEmail);
                    props.setIsAccountActive(true);
                }
                navigateToHomeOrActivationPage()
            }
        })
    }

    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login();
    }

    function handleError(error: string) {
        switch(error){
            case "email or password is missing.":
                setError('Inserisci Email e Password!');
                break;
            case "Email or password is wrong":
                setError('Credenziali errate!')
                break;
        }
               
    }

    function navigateToHomeOrActivationPage() {
        let auth = localStorage.getItem('authenticated');
        let accountActive = localStorage.getItem('isAccountActive');
        if(auth === "true"){
            if(accountActive === "true"){
                navigate('/homePage', {replace:true});
            }else{
                navigate('/activateAccount', {replace:true})
            }
        }
    }

}

