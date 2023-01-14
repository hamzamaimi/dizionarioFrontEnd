import React from "react";

export const LoginForm = (props : {width : string}) => {
    return(
        <div id={"login-form"} className={"mx-auto"}>
            <form>
                <div className="mb-3 text-start">
                    <label className="login-form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 text-start">
                    <label className="login-form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button id={"login-button"} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}