import React from "react";

export const LoginForm = (props : {width : string}) => {
    return(
        <div id={"login-form"} className={"mx-auto"}>
            <form>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label mb-3">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                <button id={"login-button"} type="submit" className="btn btn-primary">
                    Login
                </button>

                <p id={"login-form-divider"}>
                    <small>OR LOGIN WITH</small>
                </p>

                <div className={"row"}>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-git-hub"} className={"alternative-login"}>
                            <a>
                                <img src="images/git-hub.svg" width={"24"} height={"24"}/>
                                <span style={{marginLeft: "8px"}}>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-google"} className={"alternative-login"}>
                            <a>
                                <img src="images/google.svg" width={"24"} height={"24"}/>
                                <span style={{marginLeft: "8px"}}>Google</span>
                            </a>
                        </div>
                    </div>
                    <div className={"col-xl-4 col-12"}>
                        <div id={"login-twitter"} className={"alternative-login"}>
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