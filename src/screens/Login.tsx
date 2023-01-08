import React from "react"
import "../styles/Login.css"
import {ProjectLogo} from "../components/ProjectLogo";
export const Login = () => {
    return(
        <>
            <div className={"customContainer container-fluid"}>
                <div className={"row h-100"}>
                    <div className={"col-lg-2"}></div>
                    <div className={"col-lg-8 h-100"}>
                        <div className={"row h-100"}>
                            <div className={"col-lg-3 h-100"}>
                                <ProjectLogo width="100%" />
                            </div>
                            <div className={"col-lg h-100"}></div>
                            <div className={"col-lg-3 h-100"}></div>
                        </div>
                    </div>
                    <div className={"col-lg-2"}></div>
                </div>
            </div>
        </>
    )
}