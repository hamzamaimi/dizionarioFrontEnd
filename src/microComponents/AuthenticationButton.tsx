import React from "react";

export const AuthenticationButton = (props : {buttonContent : string}) => {
    return(
        <button type="submit" id={"authentication-button"} className="btn btn-primary">
            {props.buttonContent}
        </button>
    )
}