import React from "react";
import { ProjectLogo } from "../microComponents/ProjectLogo";
import { LogOut } from "./LogOut";

export const LogoWithLogOut = () => {
    return(<>
            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                    <div className="row">
                        <div className="col-md-2 col-xxl-4 col-12"></div>
                        <div className="col-md-8 col-xxl-4 col-12">
                            <ProjectLogo width={"100%"}/>
                        </div>
                        <div className="col-md-2 col-xxl-4 col-12 text-center">
                            <LogOut />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
    </>)
}