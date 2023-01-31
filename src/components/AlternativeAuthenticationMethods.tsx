import React from "react";

export const AlternativeAuthenticationMethods = () => {
    return(
        <div className={"row"}>
            <div className={"col-xl-4 col-6"}>
                <div id={"login-git-hub"} className={"alternative-login"} title={"to implement..."}>
                    <a>
                        <img src="images/git-hub.svg" width={"24"} height={"24"}/>
                        <span style={{marginLeft: "8px"}}>GitHub</span>
                    </a>
                </div>
            </div>
            <div className={"col-xl-4 col-6"}>
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
    )
}