import React from "react"
import "../styles/Login.css"
import {ProjectLogo} from "../components/ProjectLogo";
import {LoginForm} from "../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <>
            <div className={"customContainer container-fluid"}>
                <div className={"row h-100"} id="first-row">
                    <div className={"col-xxl col-lg col-md"}/>
                    <div className={"col-xxl-7 col-lg-9 col-md-7 col-12"}>
                        <div className={"row"}>
                            <div className={"col-lg-3 col-12 col-sm-12 h-100"}>
                                <ProjectLogo width="100%" />
                            </div>
                            <div style={{display: "none"}} className={"col-sm-1 login-sm-1"}/>
                            <div className={"col-lg-6 col-12 col-sm-10 h-100 text-center"}>
                                <div className={"h-100"} id={"login-content"}>
                                    <p id={"login-title"} className={"align-middle"}>
                                        Welcome back
                                    </p>
                                    <p id={"login-sub-title"} className={"align-middle"}>
                                        Log in to your account.
                                    </p>
                                    <LoginForm width={"90%"} />
                                </div>
                                <div id={"login-actions"}>
                                    <p>
                                        <Link to="/registration">
                                            Registrati
                                        </Link>
                                        <span>|</span>
                                        <a href={"#"}>
                                            Reset password
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={"col-lg-3 col-12 col-sm-1"}/>
                        </div>
                    </div>
                    <div className={"col-xxl col-lg col-md"}></div>
                </div>
            </div>
        </>
    )
}