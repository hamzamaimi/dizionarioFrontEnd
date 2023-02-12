import React from "react";
// import { LogOut } from "../components/LogOut";
import { ProjectLogo } from "../microComponents/ProjectLogo";
import { WorldFlags } from "../microComponents/WorldFlags";
import "../styles/Application.css"

export const HomePage = () => {

    return(<>
        <div className={"customContainer container-fluid"}>
            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                    <div className="row">
                        <div className="col-md-2 col-xxl-4 col-12"></div>
                        <div className="col-md-8 col-xxl-4 col-12">
                            <ProjectLogo width={"100%"}/>
                        </div>
                        <div className="col-md-2 col-xxl-4 col-12"></div>
                    </div>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>

            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8 text-center">
                    <div className="row">
                        <div className="card col-12 mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Gestisci tabelle</h5>
                                <p className="card-text">Inserisci, modifica o elimina parole e tabelle.</p>
                                <button className="btn btn-primary">Gestisci</button>
                            </div>
                        </div>

                        <div className="card col-12 mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Fai un quiz</h5>
                                <p className="card-text">Esercitati utilizzando le parole che hai inserito nelle tue tabelle.</p>
                                <button className="btn btn-primary">Esercitati</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
            <WorldFlags />
        </div>
    </>)
}