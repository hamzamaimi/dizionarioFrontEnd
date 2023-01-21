import React from "react";
import axios from 'axios';

export const LoginForm = (props : {width : string}) => {

    return(
        <div id={"login-form-container"} className={"mx-auto"}>
            <form id={"fm-login"} onSubmit={(e) => checkForm(e)}>
                <div id="credenzialiErrate" className='alert alert-danger d-none' role='alert'>Credenziali errate!</div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Password</label>
                    <input type="password" className="form-control" id="InputPassword" required/>
                </div>

                <button type="submit" id={"login-button"} className="btn btn-primary">
                    Log in
                </button>

                <p id={"login-form-divider"}>
                    <small>OR LOGIN WITH</small>
                </p>

                <div className={"row"}>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-git-hub"} className={"alternative-login"} title={"to implement..."}>
                            <a>
                                <img src="images/git-hub.svg" width={"24"} height={"24"}/>
                                <span style={{marginLeft: "8px"}}>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-google"} className={"alternative-login"} title={"to implement..."}>
                            <a>
                                <img src="images/google.svg" width={"24"} height={"24"}/>
                                <span style={{marginLeft: "8px"}}>Google</span>
                            </a>
                        </div>
                    </div>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-twitter"} className={"alternative-login"} title={"to implement..."}>
                            <a>
                                <img src="images/twitter.svg" width={"24"} height={"24"}/>
                                <span style={{marginLeft: "8px"}}>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
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