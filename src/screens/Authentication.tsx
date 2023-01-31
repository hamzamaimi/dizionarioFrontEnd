import React from "react"
import "../styles/Authentication.css"
import {ProjectLogo} from "../microComponents/ProjectLogo";
import {LoginForm} from "../components/LoginForm";
import { Link } from "react-router-dom";
import {RegistrationForm} from "../components/RegistrationForm";
import {ActivateAccount} from "../components/ActivateAccount";

export const Authentication = (props : {title : string, action : string, formType : string, setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>}) => {
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
                            <div style={{display: "none"}} className={"col-sm-1 authentication-sm-1"}/>
                            <div className={"col-lg-6 col-12 col-sm-10 h-100 text-center"}>
                                <div className={"h-100"} id={"authentication-content"}>
                                    <p id={"authentication-title"} className={"align-middle"}>
                                        {props.title}
                                    </p>
                                    <p id={"authentication-sub-title"} className={"align-middle"}>
                                        {props.action}
                                    </p>

                                    {getFormComponent(props.formType, props.setIsAccountActive)}
                                </div>
                                <div id={"authentication-actions"}>
                                    {getAuthenticationActionAnchors(props.formType)}
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

const getFormComponent = (formType : string, setIsAccountActive? : React.Dispatch<React.SetStateAction<boolean>>) => {
    switch (formType){
        case 'login':
            return <LoginForm/>;
        case 'registration':
            return <RegistrationForm setIsAccountActive={setIsAccountActive}/>;
        case 'activateAccount':
            return <ActivateAccount/>;
        default:
            return <LoginForm />;
    }
}

const getAuthenticationActionAnchors = (formType : string) => {
    switch (formType){
        case 'login':
            return(<p>
                    <Link to='/registration'>Registrati</Link>
                    <span>|</span>
                    <a href={"#"}>Reset password</a>
                </p>);
        case 'registration':
            return(<p>
                <Link to='/'>Log In</Link>
                <span>|</span>
                <a href={"#"}>Reset password</a>
            </p>);
        default:
            return(<></>);
    }
}