import React from "react";

export const AuthenticationButton = (props : {buttonContent : string, classes? : string}) => {
    return(
        <button type="submit" id={"authentication-button"} className={`btn btn-primary props ${props.classes}`}>
            {props.buttonContent}
        </button>
    )
}