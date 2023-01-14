import React from "react"
import "../styles/Login.css"
import {ProjectLogo} from "../components/ProjectLogo";
import {LoginForm} from "../components/LoginForm";
export const Login = () => {
    return(
        <>
            <div className={"customContainer container-fluid"}>
                <div className={"row h-100"} id="first-row">
                    <div className={"col-lg-2 col-md"}></div>
                    <div className={"col-lg-8 col-md-7 col-12"}>
                        <div className={"row"}>
                            <div className={"col-lg-3 col-12 col-sm-12 h-100"}>
                                <ProjectLogo width="100%" />
                            </div>
                            <div className={"col-sm-1"}/>
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
                            </div>
                            <div className={"col-lg-3 col-12 col-sm-1 h-100"}>

                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-2 col-md"}></div>
                </div>
            </div>
        </>
    )
}